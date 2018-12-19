import React, { Component } from "react";
import MyOrderView from "../components/MyOrder";
import axios from "axios";
import { mainAPI } from "../api";
import { Redirect } from "react-router-dom";

class MyOrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      myorder: null,
      goToMain: false
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      // 로그인시
      try {
        const [
          { data: user },
          {
            data: { results }
          }
        ] = await axios.all([
          mainAPI.get("/members/profile/"),
          mainAPI.get("/order/")
        ]);

        const myorder = results.filter(r => {
          if (r.user === user.pk) {
            return r;
          }
        });

        this.setState({
          myorder: myorder,
          loading: false
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      // 미로그인시
      alert("로그인이 필요한 서비스입니다.");
      this.setState({
        goToMain: true
      });
    }

    console.log(this.state);
  }

  render() {
    const { myorder, loading, goToMain } = this.state;
    if (goToMain) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <MyOrderView loading={loading} myorder={myorder} />
      </div>
    );
  }
}

export default MyOrderContainer;
