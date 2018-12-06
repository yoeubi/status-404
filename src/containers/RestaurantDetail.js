import React, { Component } from "react";
import RestaurantDetailView from "../components/RestaurantDetail/RestaurantDetailView";
import { UiProvider } from "../context/UiContext";

import { withUser } from "../context/UserContext";

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    // TODO :: 선택한 상점의 정보를 불러오는 ajax 요청을 작성해야 함
    // 불러온 정보를 state 에 저장한다.
    // api 연동 전 로딩인디케이터 테스트를 위한 함수
    // FIXME :: API 연동시 수정해주세요.
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }
  render() {
    const { loading } = this.state;
    console.log(this.props);
    return (
      <UiProvider>
        <RestaurantDetailView loading={loading} {...this.props} />
      </UiProvider>
    );
  }
}

export default withUser(RestaurantDetail);
