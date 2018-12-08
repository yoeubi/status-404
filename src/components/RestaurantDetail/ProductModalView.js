import React, { Component } from "react";
import styles from "./ProductModalView.module.scss";
import classNames from "classnames/bind";

import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg"; // 뒤로가기 아이콘
import { ReactComponent as Check } from "../../img/check.svg"; // checkbox 아이콘

const cx = classNames.bind(styles);
class ProductModalView extends Component {
  static defaultProps = {
    // 모달 토글 여부
    show: false,
    menu: {
      id: 0,
      name: "페퍼로니",
      description: "설명 설명 설명충 이거슨 설명",
      price: 12000,
      img:
        "https://i2.wp.com/pizzaschool.net/wp-content/uploads/2015/11/%ED%8E%98%ED%8D%BC%EB%A1%9C%EB%8B%88%ED%94%BC%EC%9E%90%EC%88%98%EC%A0%95.jpg?fit=800%2C800&ssl=1",
      options: [
        {
          optionId: 1,
          name: "파인애플 토핑",
          price: 3000
        },
        {
          optionId: 2,
          name: "치즈 토핑",
          price: 3000
        },
        {
          optionId: 3,
          name: "아보카도 토핑",
          price: 3000
        }
      ]
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      menu: null,
      totalPrice: 0, // 기본 합계금액
      quantity: 1 // 기본 수량
    };
  }

  async componentDidMount() {
    const { menu } = this.props;

    const newOptions = menu.options.map(option => {
      option.checked = false;
      return option;
    });

    await this.setState(prevState => ({
      menu: {
        ...menu,
        options: newOptions
      },
      totalPrice: menu.price * this.state.quantity
    }));
  }

  handleChange = async optionId => {
    const newOptions = this.state.menu.options.map(option => {
      if (option.optionId === optionId) {
        option.checked = !option.checked;
      }
      return option;
    });
    await this.setState(prevState => ({
      menu: {
        ...prevState.menu,
        options: newOptions
      }
    }));

    this.sumTotalPrice();
  };

  sumTotalPrice = async () => {
    let result = 0; // 옵션 가격의 합을 구하기 위한 변수
    const { options } = this.state.menu;
    for (const option of options) {
      if (option.checked === true) {
        result += option.price;
      }
    }
    await this.setState(prevState => ({
      totalPrice: this.state.menu.price * this.state.quantity + result
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
    const { show, name, onProductModal, onHandleBodyOnModal } = this.props;
    const { menu, totalPrice, quantity } = this.state;
    return (
      <div className={cx("ProductModalWrap", { Show: show })}>
        {!menu ? (
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
              <div className={cx("ProductImg")}>
                <img src={menu.img} alt={menu.name} />
              </div>
              <h2 className={cx("ProductName")}>{menu.name}</h2>
              <div className={cx("ProductPrice")}>
                <label>가격</label>
                <span>{menu.price.toLocaleString()} 원</span>
              </div>
              <div className={cx("ProductOptions")}>
                <div className={cx("ProductOptionsHeader")}>
                  <label>추가선택</label>
                  <span>{menu.options.length} 개 선택 가능</span>
                </div>
                <ul className={cx("ProductOptionList")}>
                  {menu.options &&
                    menu.options.map(o => (
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
                  {totalPrice.toLocaleString()} 원
                </span>
                <span className={cx("Least")}>
                  최소 주문 금액 : {menu.price}
                </span>
              </div>
              <button
                onClick={() => {
                  alert("상품이 장바구니에 담겼습니다.");
                  onProductModal();
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
