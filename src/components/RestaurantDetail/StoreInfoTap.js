import React, { Component } from "react";
import styles from "./StoreInfoTap.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class StoreInfoTap extends Component {
  render() {
    return (
      <>
        <div className={cx("title")}>가게 소개</div>
        <div className={cx("title")}>가게 통계</div>
        <div className={cx("title")}>배달팁 안내</div>
        <div className={cx("title")}>안내 및 혜택</div>
        <div className={cx("title")}>영업 정보</div>
        <div className={cx("title")}>위치 정보</div>
        <div className={cx("title")}>사업자 정보</div>
      </>
    );
  }
}
