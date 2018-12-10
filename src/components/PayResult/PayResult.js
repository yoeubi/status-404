import React from "react";
import styles from "./PayResult.module.scss";
import classNames from "classnames/bind";
import BackHeader from "../BackHeader";
import OrderTable from "../OrderTable";
import Table from "../Table";
import Order from "../Order/Order";

const cx = classNames.bind(styles);

const PayResult = props => {
  return (
    <div className={cx("pay-result")}>
      <BackHeader
        title="바로결제 내역"
        style={{ borderBottom: "1px solid #eee" }}
      />
      <div className={cx("pay-content")}>
        <Order />
        <OrderTable style={{ marginTop: "1rem" }} />
        <Table style={{ marginTop: "1rem" }} />
        <div className={cx('info')}>
            <p className={cx('text')}>배달의민족 고객센터 24시간, 연중무휴</p>
            <p className={cx('phone')}>1644-0025</p>
        </div>
      </div>
    </div>
  );
};

export default PayResult;
