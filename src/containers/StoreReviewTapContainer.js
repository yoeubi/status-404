import React, { Component } from "react";
import StoreReviewTap from "../components/RestaurantDetail/StoreReviewTap";
import ReviewWriteModal from "../components/RestaurantDetail/ReviewWriteModal";

export default class StoreReviewTapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  handleReviewWriteModal = () => {
    this.setState({
      show: true
    });
    console.log("된다!");
  };

  render() {
    // const { activePhotoReviewBtn, orderBtn } = this.state;
    const { show } = this.state;
    return (
      <>
        <StoreReviewTap
          // show={show}
          onReviewWriteModal={() => this.handleReviewWriteModal()}
        />
        <ReviewWriteModal show={show} />
      </>
    );
  }
}
