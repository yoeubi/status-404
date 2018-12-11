import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NewLogin.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as X } from "../../svg/x.svg";
import Page from "../../Layout/Page";
import NewInput from "../NewInput/NewInput";
import Nothing from "../Nothing";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const cx = classNames.bind(styles);

class NewLogin extends Component {
  state = {
    username: "",
    password: "",
    focus: "",
    google : false,
    facebook : false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFocus = e => {
    this.setState({
      focus: e.target.name
    });
  };
  handleClear = target => {
    this.setState({
      [target]: ""
    });
  };
  render() {
    const { username, password, focus , google, facebook } = this.state;
    const { login , facebookLogin , googleLogin , failLogin,  warning ,success ,history} = this.props;
    if(success) history.replace('/');
    return <Page left={<Link to="/">
            <X style={{ transform: "scale(1.5)" }} />
          </Link>}>
        <div className={cx("notification")}>{warning}</div>
        <div>
          <NewInput type="text" value={username} name="username" placeholder="아이디 또는 이메일" onChange={this.handleChange} autoComplete="off" onFocus={this.handleFocus} className={cx("input", 'line')}>
            <span className={cx("clear", {
                show: username && focus === "username"
              })} onClick={() => this.handleClear("username")}>
              <X style={{ transform: "scale(1.2)", opacity: "0.5" }} />
            </span>
          </NewInput>
        </div>
        <div className={cx("form")}>
          <NewInput type="password" value={password} name="password" placeholder="비밀번호" onChange={this.handleChange} autoComplete="off" onFocus={this.handleFocus} className={cx("input",'line')}>
            <span className={cx("clear", {
                show: password && focus === "password"
              })} onClick={() => this.handleClear("password")}>
              <X style={{ transform: "scale(1.2)", opacity: "0.5" }} />
            </span>
          </NewInput>
        </div>
        <Nothing style={{ background: "#2ac1bc", color: "#fff", fontSize: "1.4rem", height: "45px", marginTop: "3rem" , cursor :'pointer' }} onClick={() => login(username, password)}>
          로그인
        </Nothing>
        <p className={cx("find")}><Link to="/">아아디/비밀번호 찾기</Link></p>
        <div className={cx("social-login")}>
          <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_KEY} buttonText="Google Login"  onSuccess={googleLogin} onFailure={() => google && failLogin('google')} render={renderProps => (
          <button className={cx("google")} onClick={() => { this.setState({ google : true }); renderProps.onClick();  } }>Google Login</button>
          )} />
        <FacebookLogin appId={process.env.REACT_APP_FACEBOOK_KEY} autoLoad={facebook} callback={(response) => facebook && facebookLogin(response)} fields="name,email,picture" cssClass={cx("facebook")} onClick={() => this.setState({facebook : true})} />
        </div>
        <p className={cx("join")}>
          혹시, 배달의민족이 처음이신가요? <Link to="/join">회원가입</Link>
        </p>
      </Page>;
  }
}

export default NewLogin;
