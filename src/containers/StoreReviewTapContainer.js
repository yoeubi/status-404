import React, { Component } from "react";
import StoreReviewTap from "../components/RestaurantDetail/StoreReviewTap";
import ReviewModalContainer from "./ReviewModalContainer";

export default class StoreReviewTapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 리뷰 작성 모달의 활성화 여부
      show: false,
      // 사용자의 리뷰 작성 내용
      review: ""
    };
  }

  // 리뷰 작성 모달의 활성화를 제어하는 함수
  handleReviewWriteModal = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  handleUesrInput = e => {
    const review = e.target.value;
    this.setState({
      review
    });
  };

  handleSubmitBtn = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { name, activeTab } = this.props;
    const { show, review } = this.state;
    return (
      <>
        <StoreReviewTap
          activeTab={activeTab}
          show={show}
          onReviewWriteModal={() => this.handleReviewWriteModal()}
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
