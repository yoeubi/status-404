import React, { Component } from "react";
import MyOrderView from "../components/MyOrder";
import { mainAPI } from "../api";

class MyOrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      myorder: null
    };
  }

  async componentDidMount() {
    // api 호출 로직 작성
    const { data } = await mainAPI.get("/order/");

    console.log(data);

    this.setState({
      myorder: data,
      loading: false
    });
  }

  render() {
    const { myorder, loading } = this.state;
    return (
      <div>
        <MyOrderView loading={loading} myorder={myorder} />
      </div>
    );
  }
}

export default MyOrderContainer;
