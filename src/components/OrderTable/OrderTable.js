import React from "react";
import styles from "./OrderTable.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const OrderTable = props => {
  const { payment, payment_option, style, list } = props;
  return (
    <div className={cx("order-table")} style={style}>
      <table>
        <tbody>
          {list.map((li, index) => (
            <tr key={index}>
              <td>{li.food}</td>
              <td>{li.total_price}원</td>
            </tr>
          ))}

          <tr>
            <td>총 결제 금액</td>
            <td>{payment}원</td>
          </tr>
          <tr>
            <td>결제방법</td>
            <td>{payment_option}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
