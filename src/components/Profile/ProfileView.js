import React, { Component } from "react";
import { Link } from "react-router-dom";

import withLoading from "../../HOC/withLoading";

import styles from "./ProfileView.module.scss";
import classNames from "classnames/bind";

import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg";

const cx = classNames.bind(styles);

class ProfileView extends Component {
  static defaultProps = {
    logout: () => {
      console.log("logout");
    },
    // 개발예정
    noService: () => {
      alert("서비스 준비중입니다.");
    }
  };

  render() {
    const {
      user,
      onLogout,
      preparingService,
      toggleSwitch,
      switchedEmail,
      switchedSNS
    } = this.props;
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
            {user.img_profile ? (
              <img src={user.img_profile} alt={user.username} />
            ) : (
              <img
                src="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/a5/4b/75/a54b7599-93f4-e3de-956b-d2aadb28d02b/AppIcon2015-1x_U007emarketing-85-220-0-3.png/1200x630bb.jpg"
                alt={user.username}
              />
            )}
            <span className={cx("NickName")}>{user.nickname}</span>
          </div>
          <input type="text" value={user.username} readOnly />
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

            <button onClick={() => preparingService()}>변경</button>
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
                  value={user.phone.slice(0, 3)}
                />
                <input
                  className={cx("PhoneNumber")}
                  type="number"
                  readOnly
                  value={user.phone.slice(3, 7)}
                />
                <input
                  className={cx("PhoneNumber")}
                  type="number"
                  readOnly
                  value={user.phone.slice(7, 11)}
                />
              </div>
            </div>
            <button onClick={() => preparingService()}>재인증</button>
          </div>
        </div>

        <div className={cx("Marketing")}>
          <h2>마케팅 정보 수신 동의</h2>
          <p>이벤트 및 혜택에 대한 다양한 정보를 받으실 수 있습니다.</p>
          <div className={cx("Email")}>
            <span>메일 수신동의</span>
            <div
              onClick={() => toggleSwitch(1)}
              className={cx("Switch", { on: switchedEmail })}
            >
              <div className={cx("SwitchToggle")} />
            </div>
          </div>
          <div className={cx("SMS")}>
            <span>SMS 수신동의</span>
            <div
              onClick={() => toggleSwitch(2)}
              className={cx("Switch", { on: switchedSNS })}
            >
              <div className={cx("SwitchToggle")} />
            </div>
          </div>
        </div>

        <div className={cx("Footer")}>
          <span onClick={() => preparingService()}>회원탈퇴</span>
          <span onClick={() => onLogout()}>logout</span>
        </div>
      </div>
    );
  }
}

export default withLoading(ProfileView);
