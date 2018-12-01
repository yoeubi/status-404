import React, { Component } from "react";
import styles from "./ProfileView.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class ProfileView extends Component {
  static defaultProps = {
    // user: {
    //     pk: null,
    //     username: null,
    //     nickname: null,
    //     phone: null,
    //     img_profile: null
    //   },
    // address : [
    //     {
    //         address_name: "서울 강동구 천호동 225-15",
    //         main_address_no: "225",
    //         mountain_yn: "N",
    //         region_1depth_name: "서울",
    //         region_2depth_name: "강동구",
    //         region_3depth_name: "천호동",
    //         sub_address_no: "15",
    //         zip_code: ""
    //     }
    // ],
    // logout: this.logout.bind(this),
    user: {
      pk: null,
      username: "이강산",
      nickname: "닉네임 강산",
      phone: "010-0000-0000",
      img_profile:
        "http://mblogthumb4.phinf.naver.net/20151117_151/smartbaedal_1447748320696qYGB3_JPEG/12109275_986494971373814_8759974093703893190_n.jpg?type=w2"
    },
    address: [
      {
        address_name: "서울 강동구 천호동 225-15",
        main_address_no: "225",
        mountain_yn: "N",
        region_1depth_name: "서울",
        region_2depth_name: "강동구",
        region_3depth_name: "천호동",
        sub_address_no: "15",
        zip_code: ""
      }
    ],
    logout: () => {
      console.log("logout");
    }
  };
  render() {
    const { user, address, logout } = this.props;
    return (
      <div className={cx("Profile")}>
        <div className={cx("Header")}>
          <button className={cx("Prev")}>prev</button>
          <div className={cx("Title")}>내 정보 수정</div>
          <button className={cx("Save")}>저장</button>
        </div>

        <div className={cx("Summary")}>
          <div className={cx("Avatar")}>
            <img src={user.img_profile} alt={user.username} />
            <span className={cx("NickName")}>{user.nickname}</span>
          </div>
          <input type="text" defaultValue={user.username} />
        </div>

        <div className={cx("ProfileFooter")}>
          <button>회원탈퇴</button>
          <button onClick={() => logout()}>logout</button>
        </div>
      </div>
    );
  }
}

export default ProfileView;
