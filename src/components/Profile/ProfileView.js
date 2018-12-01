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

        <form className={cx("Form")}>
          <div className={cx("Elem")}>
            <label htmlFor="username">이메일</label>
            <input type="text" name="username" />
          </div>
          <div className={cx("Elem")}>
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" />
            <button>변경</button>
          </div>
          <div className={cx("Elem")}>
            <label>
              휴대폰 인증
              <span className={cx("Caption")}>
                주문정보의 연락처로 사용됩니다.
              </span>
            </label>
            <div className={cx("PhoneWrap")}>
              <input type="number" readOnly value={"000"} />
              <input type="number" readOnly value={"000"} />
              <input type="number" readOnly value={"000"} />
              <button>재인증</button>
            </div>
          </div>
        </form>

        <div className={cx("Marketing")}>
          <h2>마케팅 정보 수신 동의</h2>
          <p>이벤트 및 혜택에 대한 다양한 정보를 받으실 수 있습니다.</p>
          <div className={cx("Eamil")}>
            <span>메일 수신동의</span> <button>on/off</button>
          </div>
          <div className={cx("Eamil")}>
            <span>SMS 수신동의</span> <button>on/off</button>
          </div>
        </div>

        <div className={cx("Footer")}>
          <button>회원탈퇴</button>
          <button onClick={() => logout()}>logout</button>
        </div>
      </div>
    );
  }
}

export default ProfileView;
