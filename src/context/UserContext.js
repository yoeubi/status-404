import React, { Component } from "react";
import { mainAPI } from "../api";
import axios from 'axios';

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
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
    success: false,
    cart: null,
    createAddressFlag: false,
    login: this.login.bind(this),
    logout: this.logout.bind(this),
    facebookLogin: this.facebookLogin.bind(this),
    googleLogin: this.googleLogin.bind(this),
    failLogin: this.failLogin.bind(this),
    join: this.join.bind(this),
    pullCart: this.pullCart.bind(this),
    modCart: this.modCart.bind(this),
    delCart: this.delCart.bind(this),
    createUserAddress: this.createUserAddress.bind(this)
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const [ {data : user} , {data : cart} ] = await axios.all([
          mainAPI.get("/members/profile/"),
          mainAPI.get("/cart/items/")
        ]);
        this.setState({
          user : user,
          cart : cart
        })
      } catch (e) {
        console.log("token 로그인 실패 or token 미존재");
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
        user,
        warning: "",
        success: true
      });
      localStorage.setItem("token", token);
    } catch (e) {
      this.setState({
        warning: "로그인 실패했습니다.",
        success: false
      });
    }
  }
  logout() {
    this.setState({
      user: null,
      warning: "",
      success: false
    });
    localStorage.removeItem("token");
  }
  async facebookLogin(response) {
    // mainAPI 연결
    try {
      const {
        data: { user, token }
      } = await mainAPI.post("/members/facebook/", {
        facebook_id: response.userID,
        name: response.name,
        email: response.email
      });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      this.setState({
        user
      });
    } catch (e) {
      this.failLogin("facebook");
    }
  }
  googleLogin(response) {
    // mainAPI 연결
    console.log("google 로그인");
  }
  failLogin(target) {
    console.log(`${target} 로그인이 실패했습니다.`);
    this.setState({
      warning: `${target} 로그인이 실패했습니다.`
    });
  }
  async join({ nickname, phone, password, username }) {
    try {
      await mainAPI.post("/members/register/", {
        username,
        password,
        nickname,
        phone
      });
    } catch (e) {
      console.log("회원가입 실패했습니다.");
    }
  }

  async pullCart() {
    try {
      const { data } = await mainAPI.get("/cart/items/");
      console.log(data);
      await this.setState({
        cart: data
      });
      console.log(this.state.cart);
    } catch (e) {
      console.log("장바구니 리스트 에러");
    }
  }

  async addCart({ food_pk, quantity, side_dishes_pk }) {
    try {
      await mainAPI.post("/cart/items/", {
        food_pk,
        quantity,
        side_dishes_pk
      });
      await this.pullCart();
    } catch (e) {
      console.log("카트 담기 실패");
    }
  }
  async modCart({ food_pk, quantity }) {
    try {
      await mainAPI.patch("/cart/items/", {
        food_pk,
        quantity
      });
      await this.pullCart();
    } catch (e) {
      console.log("카트 수정 실패");
    }
  }
  async delCart({ food_pk }) {
    try {
      await mainAPI.delete("/cart/items/", {
        data : {
          food_pk
        }
      });
      await this.pullCart();
    } catch (e) {
      console.log("카트 삭제 실패");
    }
  }
  async createUserAddress(address) {
    try {
      const res = await mainAPI.post("/address/", address);
      console.log(res);
      this.setState({
        createAddressFlag: true
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

const withUser = WrappedComponent => props => (
  <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
);
export { UserProvider, Consumer as UserConsumber, withUser };
