import React, { Component } from "react";
import StoreReviewTap from "../components/RestaurantDetail/StoreReviewTap";

export default class StoreReviewTapContainer extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // 리뷰탭에 사진리뷰버튼 활성화 여부
  //     activePhotoReviewBtn: false,
  //     // 리뷰탭에 리뷰 정렬 버튼 활성화 상태
  //     orderBtn: ""
  //   };
  // }

  // // 리뷰탭에 '사진리뷰만' 버튼 활성화 상태 관리 함수
  // handlePhotoReviewBtn = () => {
  //   this.setState({
  //     activePhotoReviewBtn: true
  //   });
  //   console.log("PhotoReviewBtn Active");
  // };

  // // 리뷰탭에 리뷰 정렬 순서 버튼 상태 관리 함수
  // handleOrderBtn = btnName => {
  //   this.setState({
  //     orderBtn: btnName
  //   });
  // };

  render() {
    // const { activePhotoReviewBtn, orderBtn } = this.state;
    return (
      <>
        <StoreReviewTap />
      </>
    );
  }
}
