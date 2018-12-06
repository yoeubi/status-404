import React, { Component } from "react";
import styles from "./StoreReviewTap.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class StoreReviewTap extends Component {
  render() {
    return (
      <>
        <div className={cx("ReviewTapContainer")}>
          <div className={cx("TopContainer")}>
            <button className={cx("reviewBtn")}>✏️ 리뷰를 남겨주세요</button>
            <span className={cx("title")}>📣 알려드립니다</span>
          </div>
          <div className={cx("ReviewListContainer")}>
            Review List Container
            <div className={cx("TitleContainer")}>
              <span className={cx("title")}>총 {}개의 리뷰가 있어요</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
