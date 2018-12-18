import React, { Component } from "react";
import ReviewWriteModal from "../components/RestaurantDetail/ReviewWriteModal";
import ReviewWrite from "../components/RestaurantDetail/ReviewWrite";
import { mainAPI } from "../api";

export default class ReviewModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 리뷰 작성 모달 내의 페이지 상태
      reviewWritePage: false,
      rating: null,
      review: ""
    };
  }
  // 리뷰 작성 모달에서의 페이지 상태를 제어하는 함수
  handleReviewWritePage = rating => {
    this.setState(prevState => ({
      reviewWritePage: !prevState.reviewWritePage,
      rating
    }));
  };
  // 사용자 입력을 관리하는 함수
  handleUesrInput = e => {
    const review = e.target.value;
    this.setState({
      review
    });
  };

  // Review Create 함수
  async handleSubmitBtn(review, rating, storePk) {
    console.log(review, rating, storePk);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await mainAPI.post("/review/", {
          content: review,
          rating,
          store: storePk
        });
        this.setState({
          show: false
        });
      } catch (e) {
        console.log("token 로그인 실패 or token 미존재");
      }
    }
  }

  render() {
    const { show, name, onReviewWriteModal, onSubmitBtn, storePk } = this.props;
    const { review, rating } = this.state;
    return (
      <>
        {this.state.reviewWritePage === false ? (
          <ReviewWriteModal
            name={name}
            show={show}
            onReviewWriteModal={onReviewWriteModal}
            onReviewWritePage={rating => this.handleReviewWritePage(rating)}
          />
        ) : this.state.reviewWritePage === true ? (
          <ReviewWrite
            storePk={storePk}
            rating={rating}
            name={name}
            review={review}
            onReviewWritePage={() => this.handleReviewWritePage()}
            onUserInput={e => this.handleUesrInput(e)}
            onSubmitBtn={e => this.handleSubmitBtn(review, rating, storePk)}
          />
        ) : null}
      </>
    );
  }
}
