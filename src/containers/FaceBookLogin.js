import React, { Component } from "react";
import SocialLogin from "../components/Login/SocialLogin";
import { withUser } from "../context/UserContext";

class FaceBookLogin extends Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "340137913232680",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v3.2"
      });
      this.FB = window.FB;
    }.bind(this);

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  facebookLogin = () => {
    if (!this.FB) return;
    this.FB.getLoginStatus(response => {
      if (response.status === "connected") {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, { scope: "public_profile" });
      }
    });
  };

  facebookLoginHandler = response => {
    if (response.status === "connected") {
      this.FB.api("/me", userData => {
        let result = {
          ...response,
          user: userData
        };
        this.props.socialLogin(true, result);
      });
    } else {
      this.props.socialLogin(false);
    }
  };

  render() {
    return (
      <SocialLogin onClick={this.facebookLogin} socialType="facebook">
        페이스북으로 로그인
      </SocialLogin>
    );
  }
}

export default withUser(FaceBookLogin);
