import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./ProfileView.module.scss";
import classNames from "classnames/bind";

import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg";

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
    // logout: this.logout.bind(this),
    user: {
      pk: null,
      username: "이강산",
      nickname: "닉네임 강산",
      phone: "010-0000-0000",
      img_profile:
        "http://mblogthumb4.phinf.naver.net/20151117_151/smartbaedal_1447748320696qYGB3_JPEG/12109275_986494971373814_8759974093703893190_n.jpg?type=w2"
    },
    logout: () => {
      console.log("logout");
    },
    // 개발예정
    noService: () => {
      alert("서비스 준비중입니다.");
    }
  };
  render() {
    const { user, logout, noService } = this.props;
    return (
      <div className={cx("Profile")}>
        <div className={cx("Header")}>
          <Link to="/" className={cx("Prev")}>
            <ChevronLeft />
          </Link>
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

        <div className={cx("Form")}>
          <div className={cx("Elem")}>
            <label htmlFor="username">이메일</label>
            <div className={cx("InputWrap")}>
              <input
                type="text"
                name="username"
                value={user.username}
                readOnly
              />
            </div>
          </div>
          <div className={cx("Elem")}>
            <label htmlFor="password">비밀번호</label>
            <div className={cx("InputWrap")}>
              <input
                type="password"
                name="password"
                placeholder="8 - 20자 이내"
              />
            </div>

            <button onClick={() => noService()}>변경</button>
          </div>
          <div className={cx("Elem")}>
            <label>
              휴대폰 인증
              <span className={cx("Caption")}>
                주문정보의 연락처로 사용됩니다.
              </span>
            </label>
            <div className={cx("InputWrap")}>
              <div className={cx("PhoneWrap")}>
                <input
                  className={cx("PhoneNumber")}
                  type="number"
                  readOnly
                  value={"000"}
                />
                <input
                  className={cx("PhoneNumber")}
                  type="number"
                  readOnly
                  value={"000"}
                />
                <input
                  className={cx("PhoneNumber")}
                  type="number"
                  readOnly
                  value={"000"}
                />
              </div>
            </div>
            <button onClick={() => noService()}>재인증</button>
          </div>
        </div>

        <div className={cx("Marketing")}>
          <h2>마케팅 정보 수신 동의</h2>
          <p>이벤트 및 혜택에 대한 다양한 정보를 받으실 수 있습니다.</p>
          <div className={cx("Email")}>
            <span>메일 수신동의</span> <button>on/off</button>
          </div>
          <div className={cx("SMS")}>
            <span>SMS 수신동의</span> <button>on/off</button>
          </div>
        </div>

        <div className={cx("Footer")}>
          <span>회원탈퇴</span>
          <span onClick={() => logout()}>logout</span>
        </div>
      </div>
    );
  }
}

export default ProfileView;
