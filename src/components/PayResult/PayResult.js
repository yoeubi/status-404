import React from "react";
import styles from "./PayResult.module.scss";
import classNames from "classnames/bind";
import {Link} from 'react-router-dom';
import OrderTable from "../OrderTable";
import Table from "../Table";
import Order from "../Order/Order";
import withLoading from "../../HOC/withLoading";
import CommonHeader from "../CommonHeader";
import {ReactComponent as Left} from '../../svg/chevron-left.svg';

const cx = classNames.bind(styles);

const PayResult = props => {
  const { temp: { store, payment_option, payment, shipping, phone, comment, created_at } } = props;
  return <div className={cx("pay-result")}>
      <CommonHeader left={<Link to="/" style={{ padding: "1.5rem" }}>
            <Left style={{ transform: "scale(1.5)" }} />
          </Link>} middle="결제 내역" />
      <div className={cx("pay-content")}>
      <Order name={store[0].store} created_at={created_at} />
        <OrderTable style={{ marginTop: "1rem" }} payment_option={payment_option} payment={payment} />
        <Table style={{ marginTop: "1rem" }} shipping={shipping} phone={phone} comment={comment} />
        <div className={cx("info")}>
          <p className={cx("text")}>배달의민족 고객센터 24시간, 연중무휴</p>
          <p className={cx("phone")}>1644-0025</p>
        </div>
      </div>
    </div>;
};

export default withLoading( PayResult );
