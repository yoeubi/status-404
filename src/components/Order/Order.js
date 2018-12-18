import React from "react";
import styles from "./Order.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Order = props => {
  const { progress, name, list, created_at, orderNumber, style } = props;
  const date = new Date(created_at);
  const orderDate = `${date.getMonth() + 1 }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`
  return (
    <div className={cx("order")} style={style}>
      <p className={cx("order-progress")}>{progress}</p>
      <div className={cx("order-restaurant")}>
        <p className={cx("name")}>{name}</p>
        <p className={cx("call")}>전화</p>
      </div>
      <ul className={cx("order-list")}>
        {list.map( (li,index) => (
          <li key={index}>{li}</li>
        ))}
      </ul>
      <div className={cx("order-date")}>
        <p>주문일시: {orderDate}</p>
        <p>주문번호 : {orderNumber}</p>
      </div>
      <div className={cx("service-center")}>
        <p>고객센터 전화하기</p>
      </div>
    </div>
  );
};
Order.defaultProps = {
  progress: "배달 완료",
  name: "교촌치킨 길동1호점",
  list: ["교촌 허니 콤보 1개"],
  orderDate: "2018년 10월 20일 오후 5:52",
  orderNumber: "B08400B8PN"
};

export default Order;
