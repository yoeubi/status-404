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
      selectedMenu: null
    };
  }

  // handleChange = async optionId => {
  //   const newOptions = this.state.menu.options.map(option => {
  //     if (option.optionId === optionId) {
  //       option.checked = !option.checked;
  //     }
  //     return option;
  //   });
  //   await this.setState(prevState => ({
  //     menu: {
  //       ...prevState.menu,
  //       options: newOptions
  //     }
  //   }));

  //   this.sumTotalPrice();
  // };

  componentDidUpdate(prevProps) {
    // 컴포넌트 업데이트시 최초 합계 금액 설정하기
    const { selectedMenu } = this.props;
    console.log(selectedMenu);
    if (prevProps.selectedMenu !== selectedMenu) {
      this.setState({
        totalPrice: selectedMenu.price,
        quantity: 1
      });
    }
  }
  sumTotalPrice = async () => {
    const { selectedMenu } = this.props;
    // let result = 0; // 옵션 가격의 합을 구하기 위한 변수
    // const { options } = this.state.menu;
    // for (const option of options) {
    //   if (option.checked === true) {
    //     result += option.price;
    //   }
    // }
    await this.setState(prevState => ({
      totalPrice: selectedMenu.price * this.state.quantity
    }));
  };

  handleQuantity = async mode => {
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

  render() {
    const {
      name,
      onProductModal,
      onHandleBodyOnModal,
      selectedMenu,
      least_cost,
      show,
      addItemToCart
    } = this.props;
    const { totalPrice, quantity } = this.state;
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
                  {selectedMenu.sidedishes_set &&
                    selectedMenu.sidedishes_set.map(o => (
                      <li key={o.optionId}>
                        <Check
                          className={cx("CheckBox", { Checked: o.checked })}
                        />
                        <input
                          onChange={() => this.handleChange(o.optionId)}
                          type="checkbox"
                          id={o.optionId}
                          checked={o.checked}
                        />
                        <label htmlFor={o.optionId}>
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
                  if (!localStorage.getItem("token")) {
                    alert("로그인이 필요한 서비스입니다.");
                  }
                  addItemToCart(selectedMenu.pk, this.state.quantity);
                  onProductModal();
                  onHandleBodyOnModal("close");
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
