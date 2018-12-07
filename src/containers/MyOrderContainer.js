import React, { Component } from "react";
import MyOrderView from "../components/MyOrder";

class MyOrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // api 호출 로직 작성
    // ...

    // TODO : 로딩 인디케이터 시범 적용 api 로직 작성 후 setTimeout 함수 삭제
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <MyOrderView loading={loading} />
      </div>
    );
  }
}

export default MyOrderContainer;
