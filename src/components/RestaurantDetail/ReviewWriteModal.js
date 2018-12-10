import React, { Component } from "react";
import styles from "./ReviewWriteModal.module.scss";
import classNames from "classnames/bind";

// svg
import { ReactComponent as Ex } from "../../img/x.svg"; // x 아이콘
import { ReactComponent as Star } from "../../img/star.svg"; // 별 아이콘
import Rating from "react-rating";

const cx = classNames.bind(styles);

export default class ReviewWriteModal extends Component {
  render() {
    const { show, name, onReviewWriteModal, onReviewWritePage } = this.props;
    return (
      <>
        <div className={cx("container", { show: show })}>
          <button onClick={onReviewWriteModal}>
            <Ex />
          </button>
          <h1>
            <p>
              <span>{name}</span>에서
            </p>
            드신 음식은 어떠셨어요?
          </h1>
          <div className={cx("Stars")} onClick={onReviewWritePage}>
            <Rating
              emptySymbol={
                <Star
                  className={
                    cx("Star", "Empty") // 빈 별
                  }
                />
              }
              fullSymbol={
                <Star
                  className={
                    cx("Star") // 꽉찬별
                  }
                />
              }
              fractions={
                2 // 분할
              }
              initialRating={
                4.5 // 레이팅 정보
              }
              readonly
            />
          </div>
          <span className={cx("Explanation")}>별점을 선택해주세요</span>
        </div>
      </>
    );
  }
}
