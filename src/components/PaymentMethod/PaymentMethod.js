import React, { Component } from "react";
import styles from "./PaymentMethod.module.scss";
import classNames from "classnames/bind";
import CloseHeader from "../CloseHeader/CloseHeader";
import CircleCheckBox from "../CircleCheckBox";

const cx = classNames.bind(styles);

class PaymentMethod extends Component {
  render() {
    const {
      popup,
      handlePopup,
      method,
      handleToggle,
      payList,
      generalList
    } = this.props;
    return (
      <div className={cx("payment-method", { popup })}>
        <CloseHeader title="결제수단" onClick={handlePopup} />
        <div className={cx("list")}>
          {payList.map((pay, index) => (
            <CircleCheckBox
              key={index}
              text={pay}
              handleToggle={() => handleToggle(pay)}
              disabled={method === pay}
            />
          ))}
        </div>
        {generalList.map((pay, index) => (
          <CircleCheckBox
            key={index}
            text={pay}
            handleToggle={() => handleToggle(pay)}
            disabled={method === pay}
          />
        ))}
      </div>
    );
  }
}

export default PaymentMethod;
