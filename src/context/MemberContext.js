import React, { Component } from "react";
import { kakaoAPI, mainAPI } from "../api";

const { Provider, Consumer } = React.createContext();

class MemberProvider extends Component {
  state = {
    user: {
      pk: null,
      username: null,
      nickname: null,
      phone: null,
      address: null,
      img_profile: null
    },
    warning: null,
    login : this.login.bind(this),
    logout : this.logout.bind(this),
    facebookLogin : this.facebookLogin.bind(this),
    googleLogin : this.googleLogin.bind(this),
    failLogin : this.failLogin.bind(this)
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await mainAPI.post("/members/profile/");
        this.setState({
          user: data
        });
      } catch (e) {
        this.setState({
          warning: "token 로그인 실패"
        });
      }
    }
  }

  async login({ username, password }) {
    try {
      const {
        data: { user, token }
      } = await mainAPI.post("/members/login/", {
        username,
        password
      });
      this.setState({
        user
      });
      localStorage.setItem("token", token);
    } catch (e) {
      this.setState({
        warning: "로그인 실패했습니다."
      });
    }
  }
  logout() {
    this.setState({
      user: null
    });
    localStorage.removeItem("token");
  }
  facebookLogin(response) {
      // mainAPI 연결
  }
  googleLogin(response) {
      // mainAPI 연결
  }
  failLogin(){
      this.setState({
          warning : '소셜 로그인이 실패했습니다.'
      })
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}
const withUser = WrappedComponent => props => (
  <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
);

export {MemberProvider , Consumer as MemberConsumer , withUser }; 
