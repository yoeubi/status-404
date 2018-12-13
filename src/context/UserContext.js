import React, { Component } from "react";
import { mainAPI } from "../api";

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  // state = {
  //   user: {
  //     pk: null,
  //     username: null,
  //     nickname: null,
  //     phone: null,
  //     img_profile: null
  //   },
  //   address: null,
  //   /*
  //       address : [
  //           {
  //               address_name: "서울 강동구 천호동 225-15",
  //               main_address_no: "225",
  //               mountain_yn: "N",
  //               region_1depth_name: "서울",
  //               region_2depth_name: "강동구",
  //               region_3depth_name: "천호동",
  //               sub_address_no: "15",
  //               zip_code: ""
  //           }
  //       ]
  //       */
  //   login: this.login.bind(this),
  //   logout: this.logout.bind(this),
  //   join: this.join.bind(this),
  //   socialLogin: this.socialLogin.bind(this),
  //   googleLogin: this.googleLogin.bind(this)
  // };

  // async componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const { data } = await mainAPI.get('/members/profile/');
  //     this.setState({
  //       user : data
  //     })
  //     this.getAddress(data.username);
  //   } else {
  //     this.getAddress("default");
  //   }
  // }

  // getAddress(username) {
  //   const address = JSON.parse(localStorage.getItem("address"));
  //   if (address && address[username]) {
  //     this.setState({
  //       address: address[username]
  //     });
  //   } else {
  //     this.getPosition(username);
  //   }
  // }

  // getPosition(username) {
  //   navigator.geolocation.getCurrentPosition(
  //     async ({ coords: { longitude, latitude } }) => {
  //       const {
  //         data: { documents }
  //       } = await kakaoAPI.get("", {
  //         params: {
  //           x: longitude,
  //           y: latitude,
  //           input_coord: "WGS84"
  //         }
  //       });
  //       this.setState({
  //         address: [documents[0]]
  //       });
  //       /*
  //            address : {
  //                test :  [
  //                 {
  //             address_name: "서울 강동구 천호동 225-15",
  //             main_address_no: "225",
  //             mountain_yn: "N",
  //             region_1depth_name: "서울",
  //             region_2depth_name: "강동구",
  //             region_3depth_name: "천호동",
  //             sub_address_no: "15",
  //             zip_code: ""
  //         }
  //             ]
  //            }
  //         */
  //       localStorage.setItem(
  //         "address",
  //         JSON.stringify({
  //           [username]: [documents[0]]
  //         })
  //       );
  //     }
  //   );
  // }

  // async login({ username, password }) {
  //   const {data : {user, token}} = await mainAPI.post("/members/login/", {
  //     username,
  //     password
  //   });
  //   console.log('token',user,token);
  //   this.setState({
  //     user
  //   })
  //   this.getAddress(user.username);
  //   localStorage.setItem("token", token);
  // }

  // logout() {
  //   localStorage.removeItem("token");
  //   this.setState({
  //     user: null
  //   });
  //   this.getAddress("default");
  // }
  // async join({ username, password, nickname, phone }) {
  //   await mainAPI.post("/members/register/", {
  //     username,
  //     password,
  //     nickname,
  //     phone
  //   });
  // }
  // socialLogin(result, history) {
  //   console.log(result);

  //   if (result && result.status !== "unknown") {
  //     this.setState({
  //       user: {
  //         /*
  //         pk: null,
  //       username: null,
  //       nickname: null,
  //       phone: null,
  //       img_profile: null
  //       */
  //         username: result.email,
  //         nickname: result.name,
  //         img_profile: result.picture.data.url
  //       }
  //     });
  //     history.push("/");
  //   } else {
  //     console.log("facebook error");
  //   }
  // }
  // googleLogin({ profileObj: { email, googleId, imageUrl, name } }) {
  //   if (email) {
  //     this.setState({
  //       user: {
  //         pk: googleId,
  //         username: email,
  //         nickname: name,
  //         phone: null,
  //         img_profile: imageUrl
  //       }
  //     });
  //     console.log(email, googleId, imageUrl, name);

  //   } else {
  //     console.log("Google login fail");
  //   }
  // }

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
    login: this.login.bind(this),
    logout: this.logout.bind(this),
    facebookLogin: this.facebookLogin.bind(this),
    googleLogin: this.googleLogin.bind(this),
    failLogin: this.failLogin.bind(this),
    join: this.join.bind(this),
    pullCart: this.pullCart.bind(this),
    modCart: this.modCart.bind(this),
    delCart: this.delCart.bind(this)
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await mainAPI.get("/members/profile/");
        this.setState({
          user: data,
          warning: "",
          success: true
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
      console.log(data);
      this.setState({
        cart: data.cart
      });
    } catch (e) {
      console.log("장바구니 리스트 에러");
    }
  }

  async addCart({ food_pk, quantity, side_dishes_pk = [] }) {
    try {
      const { data } = await mainAPI.post("/cart/items/", {
        food_pk,
        quantity,
        side_dishes_pk
      });
      console.log(data);
    } catch (e) {
      console.log("카트 담기 실패");
    }
  }
  async modCart({ food_pk, quantity }) {
    try {
      const { data } = await mainAPI.patch("/cart/items/", {
        food_pk,
        quantity
      });
      console.log(data);
    } catch (e) {
      console.log("카트 수정 실패");
    }
  }
  async delCart({ food_pk }) {
    try {
      const { data } = await mainAPI.delete("/cart/items/", {
        food_pk
      });
      console.log(data);
    } catch (e) {
      console.log("카트 삭제 실패");
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
