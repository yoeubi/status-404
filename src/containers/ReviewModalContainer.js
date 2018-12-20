import React, { Component } from "react";
import ReviewWriteModal from "../components/RestaurantDetail/ReviewWriteModal";
import ReviewWrite from "../components/RestaurantDetail/ReviewWrite";
import { mainAPI } from "../api";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class ReviewModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 리뷰 작성 모달 내의 페이지 상태
      reviewWritePage: false,
      rating: null,
      review: "",
      done: false
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
    this.setState({ review });
  };

  // Review Text post 함수
  handleSubmitBtn = async (review, rating, storePk, files) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await mainAPI.post("/review/", {
          content: review,
          rating,
          store: storePk
        });
        const reviewPk = res.data.pk;
        // const formData = new FormData();
        // files.forEach((f, index) => {
        //   formData.append(`file${index}`, f);
        // });
        const formData = new FormData();
        formData.append("location", files[0]);
        formData.append("review", reviewPk);
        const res2 = await mainAPI.post("/review/image/", formData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        // this.setState(prevState => ({
        //   done: !prevState.done
        // }));
        this.handleReset();
      } catch (e) {
        console.log("token 로그인 실패 or token 미존재");
      }
    }
  };
  // handleReset = () => {
  //   this.componentDidMount();
  // };
  render() {
    const {
      show,
      name,
      onReviewWriteModal,
      onSubmitBtn,
      storePk,
      store,
      onReviewWriteModalClose
    } = this.props;
    const { review, rating, done } = this.state;
    // console.log("ReviewModalContainer", store);
    if (done) {
      return <Redirect to={"/"} />;
    }
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
            onReviewWriteModal={onReviewWriteModal}
            onReviewWritePage={() => this.handleReviewWritePage()}
            onUserInput={e => this.handleUesrInput(e)}
            onSubmitBtn={this.handleSubmitBtn}
            onReviewWriteModalClose={onReviewWriteModalClose}
          />
        ) : null}
      </>
    );
  }
}
