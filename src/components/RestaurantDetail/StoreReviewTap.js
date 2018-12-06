import React, { Component } from "react";
import styles from "./StoreReviewTap.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class StoreReviewTap extends Component {
  render() {
    return (
      <>
        <button className={cx("title")}>✏️ 리뷰를 남겨주세요</button>
        <div className={cx("title")}>📣 알려드립니다</div>
      </>
    );
  }
}
