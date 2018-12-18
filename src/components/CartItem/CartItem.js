import React from "react";
import styles from "./CartItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CartItem = (props) => {
  const { food, pk, quantity, total_price , onChange, onDelete } = props;
  return <div className={cx("cart-item")}>
      <p className={cx("cart-title")}>{food}</p>
      <ul className={cx("condition-list")}>
        {/* {sidedishes_set.map(( side , index) => (
          <li key={index} className={cx("condition-item")}>
            {side.name}
          </li>
        ))} */}
      </ul>
    <p className={cx("total-price")}>{total_price}원</p>
      <div className={cx("btn")}>
      <button className={cx("dec")} onClick={() => quantity > 1 && onChange({ food_pk: pk , quantity : quantity - 1 }) }>
          -
        </button>
        <input type="text" name="amount" className={cx("amount")} value={`${quantity}개`} readOnly />
      <button className={cx("inc")} onClick={() => onChange({ food_pk: pk, quantity: quantity + 1 })}>
          +
        </button>
      </div>
    <button className={cx("delete")} onClick={() => onDelete({ food_pk: pk }) }>
        삭제
      </button>
    </div>;
};

export default CartItem;
