import React, { Component } from "react";
import styles from "./ProductModalView.module.scss";
import classNames from "classnames/bind";

import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg"; // 뒤로가기 아이콘

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
      totalPrice: 0
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
      totalPrice: menu.price
    }));
  }

  handleChange = async optionId => {
    console.log("handleChange");

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
  };

  render() {
    console.log(this.state);
    const { show, name } = this.props;
    const { menu, totalPrice } = this.state;
    return (
      <div className={cx("ProductModalWrap", { Show: show })}>
        {!menu ? (
          "...loading" // 로딩인디케이터 들어갈자리
        ) : (
          <React.Fragment>
            <div className={cx("ProductModalHeader")}>
              <ChevronLeft className={cx("Close")} />
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
                  {menu.options.map(o => (
                    <li key={o.optionId}>
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

              <p>주문금액 : {totalPrice.toLocaleString()}</p>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ProductModalView;
