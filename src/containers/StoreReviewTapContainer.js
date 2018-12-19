import React, { Component } from "react";
import StoreReviewTap from "../components/RestaurantDetail/StoreReviewTap";
import ReviewModalContainer from "./ReviewModalContainer";
import { mainAPI } from "../api";
import axios from "axios";
import { withUser } from "../context/UserContext";

class StoreReviewTapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 리뷰 작성 모달의 활성화 여부
      show: false,
      storePk: null
    };
  }
  // 리뷰 작성 모달의 활성화를 제어하는 함수
  handleReviewWriteModal = storePk => {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState(prevState => ({
        show: !prevState.show,
        storePk
      }));
    } else {
      alert("로그인 후 리뷰작성이 가능합니다.");
    }
  };

  render() {
    const { name, activeTab, store_info, store } = this.props;
    const { show, storePk } = this.state;
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
          // review={review}
          store={store}
          name={name}
          show={show}
          storePk={storePk}
          onReviewWriteModal={() => this.handleReviewWriteModal()}
          onUserInput={e => this.handleUesrInput(e)}
        />
      </>
    );
  }
}

export default withUser(StoreReviewTapContainer);
