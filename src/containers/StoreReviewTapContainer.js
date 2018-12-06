import React, { Component } from "react";
import StoreReviewTap from "../components/RestaurantDetail/StoreReviewTap";

export default class StoreReviewTapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <StoreReviewTap />
      </>
    );
  }
}
