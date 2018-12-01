import React, { Component } from "react";
import { withUser } from "../context/UserContext";
import ProfileView from "../components/Profile/ProfileView";

class ProfileContainer extends Component {
  render() {
    return <ProfileView {...this.props} />;
  }
}

export default withUser(ProfileContainer);
