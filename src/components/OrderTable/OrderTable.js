import React from "react";
import styles from "./OrderTable.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const OrderTable = props => {
  const {style} = props;
  return (
    <div className={cx("order-table")} style={style}>
      <table>
        <tbody>
          <tr>
            <td>교촌 허니 콤보 1개</td>
            <td>18000원</td>
          </tr>
          <tr>
            <td className={cx('detail')} colSpan='2'>
              <ul>
                <li>기본</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>주문 금액</td>
            <td>18000원</td>
          </tr>
          <tr>
            <td>배달팁</td>
            <td>2000원</td>
          </tr>
          <tr>
            <td>총 결제 금액</td>
            <td>20000원</td>
          </tr>
          <tr>
            <td>결제방법</td>
            <td>만나서 카드결제</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
