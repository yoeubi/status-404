import React, { Component } from "react";
import styles from "./ReviewWriteModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class ReviewWriteModal extends Component {
  render() {
    const { show } = this.props;
    return (
      <>
        <div className={cx("container", { show: show })}>
          여기는 리뷰작성 페이지 입니다.
        </div>
      </>
    );
  }
}
