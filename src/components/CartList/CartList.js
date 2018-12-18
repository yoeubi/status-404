import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./CartList.module.scss";
import classNames from "classnames/bind";
import BackHeader from "../BackHeader";
import CartItem from "../CartItem";
import Nothing from "../Nothing";
import SideNothing from "../SideNothing";
import withEmpty from "../../HOC/withEmpty";

const cx = classNames.bind(styles);

class CartList extends Component {
  render() {
    const {
      cart: { item, payment, store },
      modCart,
      delCart
    } = this.props;
    return (
      <div className={cx("cart-list")}>
        <BackHeader
          title="장바구니"
          style={{ borderBottom: "1px solid #eee" }}
        />
        <Nothing
          style={{
            fontSize: "2rem",
            background: "#fff",
            marginTop: "5rem"
          }}
        >
          {store}
        </Nothing>
        <div className={cx("cart-item-gap")}>
          {item.map(info => (
            <CartItem
              key={info.pk}
              {...info}
              onChange={modCart}
              onDelete={delCart}
            />
          ))}
        </div>
        <Nothing
          style={{
            fontSize: "1.5rem",
            color: "#2ac1bc",
            background: "#fff",
            borderTop: "1px solid #eee"
          }}
          onClick={() => this.props.history.goBack()}
        >
          <span>+ 메뉴 더 담으러 가기</span>
        </Nothing>
        <SideNothing
          left="주문금액"
          right={`${payment}원`}
          style={{ fontSize: "1.5rem", marginTop: "1rem" }}
        />
        <p className={cx("cart-notification")}>
          배달의 민족은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
          배달의 민족은 상품 거래 정보 및 거래에 책임을 지지 않습니다.
        </p>
        <Nothing
          style={{
            fontSize: "1.7rem",
            background: "#2ac1bc",
            color: "#fff",
            position: "fixed",
            bottom: 0,
            left: 0
          }}
        >
          <Link to="/pay">
            {item.length}개 {payment}원 주문하기
          </Link>
        </Nothing>
      </div>
    );
  }
}

export default withEmpty(CartList);
