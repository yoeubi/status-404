import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Join.scss";
import classNames from "classnames/bind";
import { ReactComponent as X } from "../../svg/x.svg";
import { ReactComponent as Left } from "../../svg/chevron-left.svg";
import { ReactComponent as Check } from "../../svg/check.svg";

const cx = classNames.bind(styles);

class Join extends Component {
  state = {
    nickname: "",
    email: "",
    password: "",
    phone: "",
    nickFocus: false,
    emailFocus: false,
    passFocus: false,
    phoneFocus: false,
    nickValid: false,
    emailValid: false,
    passValid: false,
    phoneValid: false
  };
  handleChange = e => {
    const { name, value } = e.target;
    const result = this.isValid(name, value);
    let newValue = this.isMax(name, value);
    this.setState({
      [name]: newValue,
      [result.target]: result.flag
    });
  };
  handleNickFocus = () => {
    this.setState({
      nickFocus: true,
      emailFocus: false,
      passFocus: false,
      phoneFocus: false
    });
  };
  handleEmailFocus = () => {
    this.setState({
      nickFocus: false,
      emailFocus: true,
      passFocus: false,
      phoneFocus: false
    });
  };
  handlePassFocus = () => {
    this.setState({
      nickFocus: false,
      emailFocus: false,
      passFocus: true,
      phoneFocus: false
    });
  };
  handlePhoneFocus = () => {
    this.setState({
      nickFocus: false,
      emailFocus: false,
      passFocus: false,
      phoneFocus: true
    });
  };
  handleRemove = target => {
    this.setState({
      [target]: ""
    });
  };
  isValid = (target, value) => {
    let flag = null;
    switch (target) {
      case "nickname":
        flag = /^[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3|a-z|A-Z|0-9]{2,10}$/g.test(
          value
        );
        return { target: "nickValid", flag };
      case "email":
        flag = /^[a-zA-Z0-9\-_]+@{1}[a-zA-Z0-9]+\.?[a-zA-Z]+\.{1}[a-zA-Z]+$/g.test(
          value
        );
        return { target: "emailValid", flag };
      case "password":
        flag = /^[a-zA-Z0-9]{8,20}$/g.test(value);
        return { target: "passValid", flag };
      case "phone":
        flag = /^[0-9]{11,12}$/g.test(value);
        return { target: "phoneValid", flag };
      default:
        throw new Error("유효성 검사 실패");
    }
  };
  isMax = (target, value) => {
    switch (target) {
      case "nickname":
        return value.slice(0, 10);
      case "email":
        return value.slice(0, 40);
      case "password":
        return value.slice(0, 20);
      case "phone":
        return value.slice(0, 11);
      default:
        throw new Error("길이 검사 실패");
    }
  };
  render() {
    const {
      nickname,
      email,
      password,
      phone,
      nickFocus,
      emailFocus,
      passFocus,
      phoneFocus,
      nickValid,
      emailValid,
      passValid,
      phoneValid
    } = this.state;
    const {
      handleChange,
      handlePassFocus,
      handleNickFocus,
      handleEmailFocus,
      handlePhoneFocus,
      handleRemove
    } = this;
    const check =
      nickValid &&
      emailValid &&
      passValid &&
      phoneValid &&
      nickname &&
      email &&
      password &&
      phone;
    return (
      <div className={cx("join")}>
        <header className={cx("header")}>
          <span className={cx("close")}>
            <Link to="/login">
              <Left />
            </Link>
          </span>
          <span>회원가입</span>
          {check ? (
            <span className={cx("complete", "check")} tabIndex="0">
              <Link to="/">완료</Link>
            </span>
          ) : (
            <span className={cx("complete")} tabIndex="0">
              완료
            </span>
          )}
        </header>
        <form className={cx("join-form")}>
          <div>
            <label htmlFor="nickname" className={cx({ show: nickFocus })}>
              닉네임
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="2~10자로 입력해주세요"
              value={nickname}
              onChange={handleChange}
              onFocus={handleNickFocus}
            />
            <p className={cx({ show: nickname && !nickValid })}>
              2~10자의 한글 영문자 숫자만 입력가능합니다.
            </p>
            <span
              className={cx("clear", {
                show: nickname && nickFocus
              })}
              onClick={() => handleRemove("nickname")}
            >
              <X style={{ fill: "rgba(0,0,0,1)" }} />
            </span>
            <span className={cx("check", { show: nickname && nickValid })}>
              <Check style={{ fill: "#2ac1bc" }} />
            </span>
          </div>
          <div>
            <label htmlFor="email" className={cx({ show: emailFocus })}>
              이메일아이디
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@baemin.com"
              value={email}
              onChange={handleChange}
              onFocus={handleEmailFocus}
            />
            <p className={cx({ show: email && !emailValid })}>
              잘못된 이메일 유형입니다.
            </p>
            <span
              className={cx("clear", {
                show: email && emailFocus
              })}
              onClick={() => handleRemove("email")}
            >
              <X style={{ fill: "rgba(0,0,0,1)" }} />
            </span>
            <span className={cx("check", { show: email && emailValid })}>
              <Check style={{ fill: "#2ac1bc" }} />
            </span>
          </div>
          <div>
            <label htmlFor="password" className={cx({ show: passFocus })}>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="8~20자로 입력해주세요"
              value={password}
              onChange={handleChange}
              onFocus={handlePassFocus}
              autoComplete="off"
            />
            <p className={cx({ show: password && !passValid })}>
              8~20자의 영문자, 숫자만 가능합니다.
            </p>
            <span
              className={cx("clear", {
                show: password && passFocus
              })}
              onClick={() => handleRemove("password")}
            >
              <X style={{ fill: "rgba(0,0,0,1)" }} />
            </span>
            <span className={cx("check", { show: password && passValid })}>
              <Check style={{ fill: "#2ac1bc" }} />
            </span>
          </div>
          <div>
            <label htmlFor="phone" className={cx({ show: phoneFocus })}>
              휴대번호
            </label>
            <input
              type="tell"
              id="phone"
              name="phone"
              placeholder="9~12자로 입력해주세요"
              value={phone}
              onChange={handleChange}
              onFocus={handlePhoneFocus}
              autoComplete="off"
            />
            <p className={cx({ show: phone && !phoneValid })}>
              9~12자의 숫자만 가능합니다.
            </p>
            <span
              className={cx("clear", {
                show: phone && phoneFocus
              })}
              onClick={() => handleRemove("phone")}
            >
              <X style={{ fill: "rgba(0,0,0,1)" }} />
            </span>
            <span className={cx("check", { show: phone && phoneValid })}>
              <Check style={{ fill: "#2ac1bc" }} />
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Join;
