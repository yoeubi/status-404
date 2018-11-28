import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.scss";
import x from "../../svg/x.svg";
import github from '../../svg/mark-github.svg';

const cx = classNames.bind(styles);

class Login extends Component {
  state = {
    username: "",
    password: "",
    userFocus: false,
    passFocus: false,
    warning: '비밀번호를 잘못 입력했습니다.'
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClear = target => {
    this.setState({
      [target]: ""
    });
  };
  handleUserFocus = () => {
    this.setState({
      userFocus: true,
      passFocus: false
    });
  };
  handlePassFocus = () => {
    this.setState({
      userFocus: false,
      passFocus: true
    });
  };
  handleClose = () => {
  }
  handleSubmit = (e) => {

  }
  render() {
    const { username, password, userFocus, passFocus, warning } = this.state;
    const {
      handleChange,
      handleClear,
      handleUserFocus,
      handlePassFocus,
      handleClose,
      handleSubmit
    } = this;
    return (
      <div className={cx("login")}>
        <span className="exit" onClick={handleClose} tabIndex={0}>
          <img src={x} alt="exit 버튼" />
        </span>
        <p className={cx("notification", {warning})}>
          {warning}
        </p>
        <form className={cx("login-form")} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">아이디 또는 이메일</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디 또는 이메일"
              value={username}
              onChange={handleChange}
              onFocus={handleUserFocus}
            />
            <span
              className={cx("clear", {
                show: username && userFocus
              })}
              onClick={() => handleClear("username")}
            >
              <img src={x} alt="clear 버튼" />
            </span>
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              onChange={handleChange}
              onFocus={handlePassFocus}
            />
            <span
              className={cx("clear", {
                show: password && passFocus
              })}
              onClick={() => handleClear("password")}
            >
              <img src={x} alt="clear 버튼" />
            </span>
          </div>
          <button>로그인</button>
          <span className="find-user">
            <Link to="/find">아이디/비밀번호 찾기</Link>
          </span>
        </form>

        <div className={cx("social-login")}>
          <button className="naver">
            <span className="icon">
              <img src={github} alt="소셜 로그인 아이콘" />
            </span>
            네이버 아이디로 로그인
          </button>
          <button className="facebook">
            <span className="icon">
              <img src={github} alt="소셜 로그인 아이콘"/>
            </span>
            페이스북으로 로그인
          </button>
        </div>

        <div className={cx("join")}>
          혹시 배달의 민족이 처음이신가요? <Link to="/join">회원가입</Link>
        </div>
      </div>
    );
  }
}

export default Login;