import React, { Component } from "react";
import RestaurantDetailView from "../components/RestaurantDetail/RestaurantDetailView";

class RestaurantDetail extends Component {
  componentDidMount() {
    // TODO :: 선택한 상점의 정보를 불러오는 ajax 요청을 작성해야 함
    // 불러온 정보를 state 에 저장한다.
  }
  render() {
    return <RestaurantDetailView {...this.props} />;
  }
}

export default RestaurantDetail;
