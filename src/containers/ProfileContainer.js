import React, { Component } from "react";
// import { withUser } from "../context/UserContext";
import ProfileView from "../components/Profile/ProfileView";

class ProfileContainer extends Component {
  render() {
    return <ProfileView {...this.props} />;
  }
}

// 실제 유저정보 받아올때까지 userContext 정보 가져오지 않게
// export default withUser(ProfileContainer);
export default ProfileContainer;
