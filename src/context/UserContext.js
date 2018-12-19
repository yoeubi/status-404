import React, { Component } from "react";
import { mainAPI } from "../api";
import axios from "axios";

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
    firstAccess: true,
    warning: null,
    success: false,
    cart: null,
    results: null,
    temp: null,
    login: this.login.bind(this),
    logout: this.logout.bind(this),
    facebookLogin: this.facebookLogin.bind(this),
    googleLogin: this.googleLogin.bind(this),
    failLogin: this.failLogin.bind(this),
    join: this.join.bind(this),
    addCart: this.addCart.bind(this),
    pullCart: this.pullCart.bind(this),
    modCart: this.modCart.bind(this),
    delCart: this.delCart.bind(this),
    createUserAddress: this.createUserAddress.bind(this),
    pullOrder: this.pullOrder.bind(this),
    addOrder: this.addOrder.bind(this),
    hanldeFirstAccess: this.hanldeFirstAccess.bind(this)
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const [
          { data: user },
          { data: cart },
          {
            data: { results }
          }
        ] = await axios.all([
          mainAPI.get("/members/profile/"),
          mainAPI.get("/cart/items/"),
          mainAPI.get("/order/")
        ]);
        this.setState({
          user,
          cart,
          results
        });
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
      await this.setState({
        cart: data
      });
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
      await mainAPI.patch(`/cart/items/${food_pk}`, {
        quantity
      });
      await this.pullCart();
    } catch (e) {
      console.log("카트 수정 실패");
    }
  }
  async delCart({ food_pk }) {
    try {
      await mainAPI.delete(`/cart/items/${food_pk}`);
      await this.pullCart();
    } catch (e) {
      console.log("카트 삭제 실패");
    }
  }
  async createUserAddress(address) {
    try {
      await mainAPI.post("/address/", address);
      const { data } = await mainAPI.get("/members/profile/");
      this.setState({
        user: data
      });
    } catch (error) {
      console.log(error);
    }
  }
  async pullOrder() {
    try {
      const {
        data: { results }
      } = await mainAPI.get("/order/");
      this.setState({ results });
    } catch (e) {
      console.log("결제 리스트 에러");
    }
  }
  async addOrder({ shipping, comment, phone, payment_option }) {
    try {
      const { data } = await mainAPI.post("/order/", {
        shipping,
        comment,
        phone,
        payment_option
      });
      this.setState({
        temp: data
      });
    } catch (e) {
      console.log("결제 추가 에러");
    }
  }

  hanldeFirstAccess() {
    console.log("hanldeFirstAccess");
    setTimeout(() => {
      this.setState({
        firstAccess: false
      });
    }, 3000);
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
