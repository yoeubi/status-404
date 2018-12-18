import React, { Component } from "react";
import StoreReviewTap from "../components/RestaurantDetail/StoreReviewTap";
import ReviewModalContainer from "./ReviewModalContainer";
import { mainAPI } from "../api";
import axios from "axios";

export default class StoreReviewTapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 리뷰 작성 모달의 활성화 여부
      show: false,
      // 사용자의 리뷰 작성 내용
      review: "",
      storePk: null,
      rating: null
    };
  }
  // 리뷰 작성 모달의 활성화를 제어하는 함수
  handleReviewWriteModal = storePk => {
    this.setState(prevState => ({
      show: !prevState.show,
      storePk
    }));
    console.log("handleReviewWriteModal", storePk);
  };

  handleUesrInput = e => {
    const review = e.target.value;
    this.setState({
      review
    });
  };

  // Review Create 함수
  async handleSubmitBtn(review, rating, storePk) {
    const res = await mainAPI.post("/review", {
      content: review,
      rating,
      store: storePk
    });
    this.setState({
      show: false
    });
  }

  render() {
    const { name, activeTab, store_info, store } = this.props;
    const { show, review } = this.state;
    // console.log("StoreReviewTapContainer", storePk);
    return (
      <>
        <StoreReviewTap
          store={store}
          store_info={store_info}
          activeTab={activeTab}
          show={show}
          onReviewWriteModal={() => this.handleReviewWriteModal(store.pk)}
        />
        <ReviewModalContainer
          review={review}
          name={name}
          show={show}
          onReviewWriteModal={() => this.handleReviewWriteModal()}
          onUserInput={e => this.handleUesrInput(e)}
          onSubmitBtn={() => this.handleSubmitBtn()}
        />
      </>
    );
  }
}
