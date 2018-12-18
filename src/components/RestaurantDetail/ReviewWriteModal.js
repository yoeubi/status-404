import React, { Component } from "react";
import styles from "./ReviewWriteModal.module.scss";
import classNames from "classnames/bind";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";
// svg
import { ReactComponent as Ex } from "../../img/x.svg"; // x 아이콘
import { ReactComponent as Star } from "../../img/star.svg"; // 별 아이콘
// import Rating from "react-rating";
// import StarRating from "./StarRating";

const cx = classNames.bind(styles);

export default class ReviewWriteModal extends Component {
  constructor(props) {
    super(props);
    this.starRef = React.createRef();
    // const starsDiv = this.starRef.current;

    this.state = {
      // star-rating 관련 state
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
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
          <div
            ref={this.starRef}
            className={cx("Stars")}
            style={{ fontSize: 70 }}
          >
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          {this.state.rating > 0 ? (
            <span
              onClick={() => onReviewWritePage(rating)}
              className={cx("NextBtn-active")}
            >
              다음
            </span>
          ) : (
            <span className={cx("NextBtn")}>다음</span>
          )}
          <span className={cx("Explanation")}>별점을 선택해주세요</span>
        </div>
      </>
    );
  }
}
