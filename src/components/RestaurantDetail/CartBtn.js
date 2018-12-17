import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./CartBtn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
class CartBtn extends Component {
  static defaultProps = {
    // 장바구니 바로가기 버튼 css fixed
    fixed: true
  };

  render() {
    const { fixed, cart } = this.props;
    return (
      <Link to={"/cart"} className={cx("CartBtn", { FixedBottom: fixed })}>
        <span> 장바구니 </span>
        {cart && <span className={cx("Quantity")}>{cart.item.length}</span>}
      </Link>
    );
  }
}

export default CartBtn;
