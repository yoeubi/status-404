import React, { Component } from "react";
import StoreReviewTap from "../components/RestaurantDetail/StoreReviewTap";
import ReviewModalContainer from "./ReviewModalContainer";

export default class StoreReviewTapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 리뷰 작성 모달의 활성화 여부
      show: false
    };
  }

  // 리뷰 작성 모달의 활성화를 제어하는 함수
  handleReviewWriteModal = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { name } = this.props;
    const { show } = this.state;
    return (
      <>
        <StoreReviewTap
          show={show}
          onReviewWriteModal={() => this.handleReviewWriteModal()}
        />
        <ReviewModalContainer
          name={name}
          show={show}
          onReviewWriteModal={() => this.handleReviewWriteModal()}
        />
      </>
    );
  }
}
