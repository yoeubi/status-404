import React, { Component } from "react";
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
    nickFocus: false,
    emailFocus: false,
    passFocus: false,
    nickValid: false,
    emailValid: false,
    passValid: false
  };
  handleChange = e => {
    const  {name , value} = e.target;
    this.setState({
      [name]: value
    });
    const result = this.isValid(name, value);
    this.setState({
        [result.target] : result.flag
    })
  };
  handleNickFocus = () => {
    this.setState({
      nickFocus: true,
      emailFocus: false,
      passFocus: false
    });
  };
  handleEmailFocus = () => {
    this.setState({
      nickFocus: false,
      emailFocus: true,
      passFocus: false
    });
  };
  handlePassFocus = () => {
    this.setState({
      nickFocus: false,
      emailFocus: false,
      passFocus: true
    });
  };
  handleRemove = target => {
    this.setState({
      [target]: ""
    });
  };
  isValid(target, value) {
      let flag = null;
    switch (target) {
      case "nickname":
            flag = /^[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3|a-z|A-Z|0-9]{2,10}$/g.test(
                value
            );
        return {target : 'nickValid', flag }
      case "email":
            flag = /^[a-zA-Z0-9\-_]+@{1}[a-zA-Z0-9]+.{1}[a-zA-Z]+$/g.test(value);
            return { target : 'emailValid', flag }
    case "password":
            flag = /^[a-zA-Z0-9]{8,20}$/g.test(value);
            return { target : 'passValid', flag }
      default:
        throw new Error('유효성 검사 실패');
    }
  }
  render() {
    const {
      nickname,
      email,
      password,
      nickFocus,
      emailFocus,
      passFocus,
      nickValid,
      emailValid,
      passValid
    } = this.state;
    const {
      handleChange,
      handlePassFocus,
      handleNickFocus,
      handleEmailFocus,
      handleRemove
    } = this;
      const check = nickValid && emailValid && passValid && nickname && email && password
    return (
      <div className={cx("join")}>
        <header className={cx("header")}>
          <span className={cx("close")}>
            <Left />
          </span>
          <span>회원가입</span>
          <span className={cx("complete", { check })}>완료</span>
        </header>
        <form className={cx("join-form")}>
          <div>
            <label
              htmlFor="nickname"
              className={cx({
                show: nickFocus
              })}
            >
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
            <span
              className={cx("clear", { show: nickname && nickFocus })}
              onClick={() => handleRemove("nickname")}
            >
              <X style={{ fill: "rgba(0,0,0,1)" }} />
            </span>
            <span className={cx("check", { show: nickname && nickValid })}>
              <Check style={{ fill: "#2ac1bc" }} />
            </span>
          </div>
          <div>
            <label
              htmlFor="email"
              className={cx({
                show: emailFocus
              })}
            >
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
            <span
              className={cx("clear", { show: email && emailFocus })}
              onClick={() => handleRemove("email")}
            >
              <X style={{ fill: "rgba(0,0,0,1)" }} />
            </span>
            <span className={cx("check", { show: email && emailValid })}>
              <Check style={{ fill: "#2ac1bc" }} />
            </span>
          </div>
          <div>
            <label
              htmlFor="password"
              className={cx({
                show: passFocus
              })}
            >
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
            />
            <span
              className={cx("clear", { show: password && passFocus })}
              onClick={() => handleRemove("password")}
            >
              <X style={{ fill: "rgba(0,0,0,1)" }} />
            </span>
            <span className={cx("check", { show: password && passValid })}>
              <Check style={{ fill: "#2ac1bc" }} />
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Join;
