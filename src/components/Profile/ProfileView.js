import React, { Component } from "react";
import styles from "./ProfileView.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class ProfileView extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className={cx("Profile")}>
        <div className={cx("Header")}>
          <button className={cx("Prev")}>prev</button>
          <div className={cx("Title")}>내 정보 수정</div>
          <button className={cx("Save")}>저장</button>
        </div>

        <div className={cx("Summary")}>
          <div className={cx("Avatar")}>
            <img
              src="http://mblogthumb4.phinf.naver.net/20151117_151/smartbaedal_1447748320696qYGB3_JPEG/12109275_986494971373814_8759974093703893190_n.jpg?type=w2"
              alt="avatar"
            />
            <span className={cx("NickName")}>{user.nickname}</span>
          </div>
          <input type="text" defaultValue={user.username} />
        </div>

        <div className={cx("ProfileFooter")}>
          <button>회원탈퇴</button>
          <button>logout</button>
        </div>
      </div>
    );
  }
}

export default ProfileView;
