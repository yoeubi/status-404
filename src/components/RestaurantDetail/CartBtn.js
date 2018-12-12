import React, { Component } from "react";
import styles from "./CartBtn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
class CartBtn extends Component {
  static defaultProps = {
    // 장바구니 바로가기 버튼 css fixed
    fixed: true
  };

  render() {
    const { fixed, numberOfCart } = this.props;
    return (
      <button className={cx("CartBtn", { FixedBottom: fixed })}>
        <span> 장바구니 </span>
        {numberOfCart ? (
          <span className={cx("Quantity")}>{numberOfCart}</span>
        ) : null}
      </button>
    );
  }
}

export default CartBtn;
