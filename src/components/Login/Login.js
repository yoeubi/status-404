import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { ReactComponent as Exit } from "../../svg/x.svg";
import { withUser } from "../../context/UserContext";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const cx = classNames.bind(styles);

class Login extends Component {
  state = {
    username: "",
    password: "",
    userFocus: false,
    passFocus: false,
    warning: null,
    facebook: false,
    clicked : false
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
  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };
  handleSocial = e => {
    e.preventDefault();
    this.setState({ facebook: true });
  };

  render() {
    const { username, password, userFocus, passFocus, warning, clicked } = this.state;
    const {
      handleChange,
      handleClear,
      handleUserFocus,
      handlePassFocus,
      handleSubmit
    } = this;
    if (this.props.user.username) return <Redirect to="/" />;
    return (
      <div className={cx("login")}>
        <span className={cx("exit")} tabIndex={0}>
          <Link to="/">
            <Exit style={{ transform: "scale(1.5)" }} />
          </Link>
        </span>
        <p className={cx("notification", { warning : warning && clicked })}>{warning}</p>
        <form className={cx("login-form")} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">아이디 또는 이메일</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디 또는 이메일"
              autoComplete="off"
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
              <Exit style={{ transform: "scale(1.2)", opacity: "0.5" }} />
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
              <Exit style={{ transform: "scale(1.2)", opacity: "0.5" }} />
            </span>
          </div>
          <button>로그인</button>
          <span className={cx("find-user")}>
            <Link to="/find">아이디/비밀번호 찾기</Link>
          </span>
        </form>

        <div className={cx("social-login")}>
          <GoogleLogin
            onClick={() => { console.log(1); this.setState({clicked : !this.state.clicked})}}
            clientId="104085265728-lvt11mjt0t0sab4lppnjl9n06872r7ri.apps.googleusercontent.com"
            buttonText="Google Login"
            className={cx("google")}
            onSuccess={response =>
              this.props.googleLogin(response, this.props.history)
            }
            onFailure={() => this.setState({warning : '구글 로그인이 실패했습니다.'})}
          />
          <FacebookLogin
            appId="340137913232680"
            autoLoad={this.state.facebook}
            callback={response => {
              this.props.socialLogin(response, this.props.history);
              this.setState({
                facebook : false
              })
            }}
            fields="name,email,picture"
            onClick={this.handleSocial}
            cssClass={cx("facebook")}
          />
        </div>

        <div className={cx("join")}>
          혹시 배달의 민족이 처음이신가요? <Link to="/join">회원가입</Link>
        </div>
      </div>
    );
  }
}

export default withUser(Login);
