import React, { Component } from "react";
import styles from "./MyOrderHeader.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg";

const cx = classNames.bind(styles);

class MyOrderHeader extends Component {
  static defaultProps = {
    // 헤더 제목
    title: "주문 내역"
  };

  render() {
    const { title } = this.props;
    return (
      <div className={cx("Wrap")}>
        <Link to="/" className={cx("Prev")}>
          <ChevronLeft />
        </Link>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default MyOrderHeader;
