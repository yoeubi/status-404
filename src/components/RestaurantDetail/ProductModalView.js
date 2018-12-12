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

  componentDidUpdate(prevProps) {
    // 컴포넌트 업데이트시 최초 합계 금액 설정하기
    const { selectedMenu } = this.props;
    console.log("componentDidUpdate");

    if (prevProps.selectedMenu !== selectedMenu) {
      if (selectedMenu.sidedishes_set) {
        // 선택한 메뉴에 옵션이 있을 경우 : options 상태에 sidedishes_set 으로부터 checked 값을 추가한 배열을 새로 생성하여 넣어준다.
        const options = selectedMenu.sidedishes_set.map(item => {
          item.checked = false;
          return item;
        });
        this.setState({
          totalPrice: selectedMenu.price,
          quantity: 1,
          options
        });
      } else {
        this.setState({
          totalPrice: selectedMenu.price,
          quantity: 1
        });
      }
    }
  }

  handleChange = async optionId => {
    // 옵션 체크를 위한 함수
    const newOptions = this.state.options.map(option => {
      if (option.pk === optionId) {
        option.checked = !option.checked;
      }
      return option;
    });
    await this.setState(prevState => ({
      options: newOptions
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
      least_cost,
      show
    } = this.props;
    const { totalPrice, quantity, options } = this.state;
    return (
      <div
        className={cx("ProductModalWrap", {
          Show: show
        })}
      >
        {!selectedMenu ? (
          "...loading" // 로딩인디케이터 들어갈자리
        ) : (
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
                  <button onClick={() => this.handleQuantity("minus")}>
                    -
                  </button>
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
        )}
      </div>
    );
  }
}

export default ProductModalView;
