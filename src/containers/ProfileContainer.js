import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import mainAPI from "../api/mainAPI";
import ProfileView from "../components/Profile/ProfileView";
import { withUser } from "../context/UserContext";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true,
      goToLoginPage: false,
      switchedEmail: true,
      switchedSNS: false
    };
  }

  componentDidMount = async () => {
    if (localStorage.getItem("token")) {
      const { data: user } = await mainAPI.get("/members/profile/");

      this.setState({
        user,
        loading: false
      });
    } else {
      alert("로그인이 필요한 서비스입니다.");
      this.setState({
        goToLoginPage: true
      });
    }
  };

  toggleSwitch = mode => {
    if (mode === 1) {
      // email
      this.setState(prevState => {
        return {
          switchedEmail: !prevState.switchedEmail
        };
      });
    }
    if (mode === 2) {
      // SNS
      this.setState(prevState => {
        return {
          switchedSNS: !prevState.switchedSNS
        };
      });
    }
  };

  hanldeLogout = () => {
    const { logout } = this.props;
    logout();
    this.setState({
      goToLoginPage: true
    });
  };

  preparingService = () => {
    alert("서비스 준비중입니다.");
  };

  render() {
    const {
      user,
      loading,
      goToLoginPage,
      switchedEmail,
      switchedSNS
    } = this.state;
    if (goToLoginPage) {
      return <Redirect to={"/login"} />;
    }
    return (
      <ProfileView
        user={user}
        loading={loading}
        switchedEmail={switchedEmail}
        switchedSNS={switchedSNS}
        onLogout={this.hanldeLogout}
        preparingService={this.preparingService}
        toggleSwitch={this.toggleSwitch}
      />
    );
  }
}

// 실제 유저정보 받아올때까지 userContext 정보 가져오지 않게
export default withUser(ProfileContainer);
