import React from 'react';
import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CartItem = ({cartTitle,conditionList,totalPrice, amount}) => {
    return <div className={cx("cart-item")}>
        <p className={cx("cart-title")}>{cartTitle}</p>
        <ul className={cx("condition-list")}>
          {conditionList.map( (con,index) => (
            <li key={index} className={cx("condition-item")}>{con}</li>
          ))}
        </ul>
        <p className={cx("total-price")}>{totalPrice}원</p>
        <div className={cx("btn")}>
          <button className={cx("dec")}>-</button>
          <input type="text" name="amount" className={cx("amount")} value={`${amount}개`} readOnly />
          <button className={cx("inc")}>+</button>
        </div>
        <button className={cx("delete")}>삭제</button>
      </div>;
};
CartItem.defaultProps = {
    cartTitle :'피자 세트',
    conditionList : ['기본: M(23800원)','피자 선택: 슈퍼슈프림 피자'],
    totalPrice : 23800, 
    amount : 1
}

export default CartItem;