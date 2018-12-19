import React, { Component } from "react";
import ReviewWriteModal from "../components/RestaurantDetail/ReviewWriteModal";
import ReviewWrite from "../components/RestaurantDetail/ReviewWrite";
import { mainAPI } from "../api";
import axios from "axios";

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

  // Review Text post 함수
  handleSubmitBtn = async (review, rating, storePk, files) => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("handleSubmitBtn", files);
      try {
        const res = await mainAPI.post("/review/", {
          content: review,
          rating,
          store: storePk
          // files: []
        });
        this.setState({
          show: false
        });
        // console.log(res);
        const reviewPk = res.data.pk;
        console.log(reviewPk);
        // Review Image post 함수
        // const { files } = this.state;
        // FormData는 key-value 저장소로서,
        // POST 요청에 담아 보낼 수 있습니다.
        // 가장 큰 특징은 **파일을 담을 수 있다**는 것입니다.
        const formData = new FormData();
        files.forEach((f, index) => {
          formData.append(`file`, f);
        });
        // console.log(formData.get("file"));

        // const res = await axios.post("https://fodfly.shop/review/image/", {
        const res2 = await mainAPI.post("/review/image/", {
          location: formData,
          review: reviewPk
        });
      } catch (e) {
        console.log("token 로그인 실패 or token 미존재");
      }
    }
  };

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
            onSubmitBtn={this.handleSubmitBtn}
          />
        ) : null}
      </>
    );
  }
}
