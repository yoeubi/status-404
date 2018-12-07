import React, { Component } from "react";
import styles from "./MyOrderView.module.scss";
import classNames from "classnames/bind";
import MyOrderHeader from "./MyOrderHeader";
import MyOrderList from "./MyOrderList";

const cx = classNames.bind(styles);

class MyOrderView extends Component {
  render() {
    return (
      <div className={cx("Wrap")}>
        <MyOrderHeader />
        <MyOrderList />
      </div>
    );
  }
}

export default MyOrderView;
