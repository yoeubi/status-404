import React, { Component } from "react";
import styles from "./ReviewWrite.module.scss";
import classNames from "classnames/bind";
//svg
import { ReactComponent as BackBtn } from "../../svg/arrow-left.svg";

const cx = classNames.bind(styles);

export default class ReviewWrite extends Component {
  render() {
    const { onReviewWritePage } = this.props;
    return (
      <div className={cx("container")}>
        <div className={cx("HeaderContainer")}>
          <button className={cx("backBtn")} onClick={onReviewWritePage}>
            <BackBtn />
          </button>
        </div>
        <div className={cx("BodyContainer")} />
        <textarea name="" id="" cols="30" rows="30" />
      </div>
    );
  }
}
