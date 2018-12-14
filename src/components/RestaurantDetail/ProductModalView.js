import React, { Component } from "react";
import styles from "./ProductModalView.module.scss";
import classNames from "classnames/bind";

import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg"; // 뒤로가기 아이콘
import { ReactComponent as Check } from "../../img/check.svg"; // checkbox 아이콘

const cx = classNames.bind(styles);

class ProductModalView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: null,
      totalPrice: 0, // 기본 합계금액
      quantity: 1, // 기본 수량
      options: null
    };
  }

  componentDidMount() {
    console.log("ProductModalView componentDidMount");
    const { selectedMenu } = this.props;
    if (selectedMenu) {
      // 최초 렌더링 시에는 selectedMenu 을 prop으로 전달받지 못한 상황이기 때문에 분기처리

      if (selectedMenu.sidedishes_set) {
        // selectedMenu 를 전달받았을 때에도 옵션정보가 있는 경우와 없는 경우가 있기 때문에 분기처리
        // 선택한 메뉴에 옵션이 있을 경우 :
        // options state에 sidedishes_set 으로부터 checked 값을 추가한 배열을 새로 생성하여 넣어준다. :: 옵션 채크 부분을 관리하기 위해서
        const options = selectedMenu.sidedishes_set.map(item => {
          item.checked = false; // check 속성을 false 값으로 넣어준다.
          return item;
        });

        this.setState({
          totalPrice: selectedMenu.price, // 최초 가격은 선택 메뉴의 가격으로 설정한다.
          quantity: 1, // 최초 수량은 1로 설정한다.
          options // 새로 생성한 옵션 객체가 들어있는 배열을 설정한다.
        });
      }

      // 선택한 메뉴에 옵션이 없는 경우
      this.setState({
        totalPrice: selectedMenu.price, // 최초 가격은 선택 메뉴의 가격으로 설정한다.
        quantity: 1 // 최초 수량은 1로 설정한다.
      });
    }
  }

  handleChange = async optionPk => {
    // 옵션 체크를 위한 함수
    const { options } = this.state; // 상태에 저장되어 있는 옵션 정보

    // 현재 option state 에서 선택한 옵션의 check 속성의 boolean 값을 토글하여 새로운 배열을 만들어 낸다.
    const newOptions = options.map(option => {
      if (option.pk === optionPk) {
        option.checked = !option.checked;
      }
      return option;
    });
    await this.setState(prevState => ({
      options: newOptions // 새로 생성한 배열을 옵션에 넣어준다.
    }));

    this.sumTotalPrice();
  };

  sumTotalPrice = async () => {
    // 선택한 메뉴의 총 주문 가격을 구하는 함수
    const { selectedMenu } = this.props;
    let result = 0; // 옵션 가격의 합을 구하기 위한 변수
    const { options } = this.state;
    for (const option of options) {
      if (option.checked === true) {
        result += option.price;
      }
    }
    await this.setState(prevState => ({
      totalPrice: selectedMenu.price * this.state.quantity + result
    }));
  };

  handleQuantity = async mode => {
    // 선택한 메뉴의 갯수를 수정하는 함수
    const { quantity } = this.state;

    if (mode === "plus") {
      await this.setState(prevState => ({
        quantity: prevState.quantity + 1
      }));
    } else if (mode === "minus" && quantity > 1) {
      await this.setState(prevState => ({
        quantity: prevState.quantity - 1
      }));
    }
    this.sumTotalPrice();
  };

  handleCartBtn = () => {
    const pk = this.props.selectedMenu.pk;
    const quantity = this.state.quantity;
    const options = this.state.options.map(item => item.pk);
    const { onHandleBodyOnModal, addItemToCart, onProductModal } = this.props;

    if (!localStorage.getItem("token")) {
      alert("로그인이 필요한 서비스입니다.");
      onHandleBodyOnModal("close");
      onProductModal();
    } else {
      addItemToCart(pk, quantity, options);
      onProductModal();
      onHandleBodyOnModal("close");
    }
  };

  render() {
    const {
      name,
      onProductModal,
      onHandleBodyOnModal,
      selectedMenu,
      least_cost
    } = this.props;
    const { totalPrice, quantity, options } = this.state;
    return (
      <div className={cx("ProductModalWrap")}>
        <React.Fragment>
          <div className={cx("ProductModalHeader")}>
            <ChevronLeft
              className={cx("Close")}
              onClick={() => {
                onProductModal();
                onHandleBodyOnModal("close");
              }}
            />
            <h1>{name}</h1>
          </div>
          <div className={cx("ProductModalBody")}>
            {selectedMenu.foodimage_set.length > 0 && (
              <div className={cx("ProductImg")}>
                <img
                  src={selectedMenu.foodimage_set[0]}
                  alt={selectedMenu.name}
                />
              </div>
            )}
            <h2 className={cx("ProductName")}>{selectedMenu.name}</h2>
            <div className={cx("ProductPrice")}>
              <label>가격</label>
              <span>{selectedMenu.price.toLocaleString()} 원</span>
            </div>
            <div className={cx("ProductOptions")}>
              <div className={cx("ProductOptionsHeader")}>
                <label>추가선택</label>
                <span>{selectedMenu.sidedishes_set.length} 개 선택 가능</span>
              </div>
              <ul className={cx("ProductOptionList")}>
                {options &&
                  options.map(o => (
                    <li key={o.pk}>
                      <Check
                        className={cx("CheckBox", { Checked: o.checked })}
                      />
                      <input
                        onChange={() => this.handleChange(o.pk)}
                        type="checkbox"
                        id={o.pk}
                        checked={o.checked}
                      />
                      <label htmlFor={o.pk}>
                        <span>{o.name}</span>
                        <span className={cx("price")}>
                          + {o.price.toLocaleString()}
                        </span>
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={cx("ProductQuantity")}>
              <label>수량</label>
              <div className={cx("ProductQuantityController")}>
                <button onClick={() => this.handleQuantity("minus")}>-</button>
                <div className={cx("Quantity")}>{quantity}</div>
                <button onClick={() => this.handleQuantity("plus")}>+</button>
              </div>
            </div>
            <div className={cx("TotalPrice")}>
              <span className={cx("Title")}>총 주문 금액</span>

              <span className={cx("Price")}>
                {totalPrice && totalPrice.toLocaleString()} 원
              </span>

              <span className={cx("Least")}>
                최소 주문 금액 : {least_cost.toLocaleString()}
              </span>
            </div>
            <button
              onClick={() => {
                this.handleCartBtn();
              }}
              className={cx("CartButton")}
            >
              장바구니 담기
            </button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default ProductModalView;
