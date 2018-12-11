import React, { Component } from "react";
import { kakaoAPI, mainAPI } from "../api";

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
    success : false,
    login: this.login.bind(this),
    logout: this.logout.bind(this),
    facebookLogin: this.facebookLogin.bind(this),
    googleLogin: this.googleLogin.bind(this),
    failLogin: this.failLogin.bind(this)
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await mainAPI.post("/members/profile/");
        this.setState({
          user: data,
          warning: '',
          success : true
        });
      } catch (e) {
        this.setState({
          warning: "token 로그인 실패",
          success : false
        });
      }
    }
  }

  async login({ username, password }) {
<<<<<<< HEAD
    try {
      const {
        data: { user, token }
      } = await mainAPI.post("/members/login/", {
        username,
        password
      });
      this.setState({
        user,
        warning: '',
          success : true
      });
      localStorage.setItem("token", token);
    } catch (e) {
      this.setState({
        warning: "로그인 실패했습니다.",
          success : false
      });
    }
=======
    const {data : {user, token}} = await mainAPI.post("/members/login/", {
      username,
      password
    });
    console.log('token',user,token);
    this.setState({
      user
    })
    this.getAddress(user.username);
    localStorage.setItem("token", token);
>>>>>>> c2691f845596261bae281671768937c836b374b4
  }
  logout() {
    this.setState({
      user: null,
      warning: '',
      success : false
    });
    localStorage.removeItem("token");
  }
  facebookLogin(response) {
    // mainAPI 연결
    console.log('facebook 로그인')
    // this.failLogin('facebook')
  }
  googleLogin(response) {
    // mainAPI 연결
    console.log('google 로그인')
  }
  failLogin(target) {
    console.log(`${target} 로그인이 실패했습니다.`);
    this.setState({
      warning: `${target} 로그인이 실패했습니다.`
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
export { UserProvider, Consumer as UserConsumber, withUser };
