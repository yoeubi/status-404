import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Left } from "../../svg/chevron-left.svg";
import Page from "../../Layout/Page";
import NewLabelInput from "../NewLabelInput";

class NewJoin extends Component {
  state = {
    nickname: "",
    username: "",
    password: "",
    phone: "",
    focus: "",
    nickValid: false,
    userValid: false,
    passValid: false,
    phoneValid: false
  };
  handleChange = (target, value) => {
    const newValue = this.maxLength(target, value);
    const valid = this.isValid(target, newValue);
    this.setState({
      [target]: newValue,
      [valid.target]: valid.flag
    });
  };
  handleFocus = target => {
    this.setState({
      focus: target
    });
  };
  handleRemove = target => {
    this.setState({
      [target]: ""
    });
  };
  maxLength(target, value) {
    switch (target) {
      case "nickname":
        return value.slice(0, 10);
      case "username":
        return value.slice(0, 40);
      case "password":
        return value.slice(0, 20);
      case "phone":
        return value.slice(0, 11);
    }
  }
  isValid(target, value) {
    let flag = null;
    switch (target) {
      case "nickname":
        flag = /^[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3|a-z|A-Z|0-9]{2,10}$/g.test(
          value
        );
        return { target: "nickValid", flag };
      case "username":
        flag = /^[a-zA-Z0-9\-_]+@{1}[a-zA-Z0-9]+\.?[a-zA-Z]+\.{1}[a-zA-Z]+$/g.test(
          value
        );
        return { target: "userValid", flag };
      case "password":
        flag = /^[a-zA-Z0-9]{8,20}$/g.test(value);
        return { target: "passValid", flag };
      case "phone":
        flag = /^[0-9]{11}$/g.test(value);
        return { target: "phoneValid", flag };
    }
  }
  render() {
    const {
      nickname,
      username,
      password,
      phone,
      focus,
      nickValid,
      userValid,
      passValid,
      phoneValid
    } = this.state;
    const complete = nickValid && userValid && passValid && phoneValid;
    return (
      <Page
        left={
          <Link to="/" style={{ padding: "1.5rem" }}>
            <Left style={{ transform: "scale(1.5)" }} />
          </Link>
        }
        middle="회원가입"
        right={
          !complete ? (
            <span style={{ padding: "1.5rem" }}>
              완료
            </span>
          ) : (
              <Link to="/" style={{ padding: "1.5rem", color: '#2fc0be' }}>
              완료
            </Link>
          )
        }
      >
        <NewLabelInput
          type="text"
          name="nickname"
          placeholder="2~10자로 입력해주세요"
          value={nickname}
          onChange={this.handleChange}
          onFocus={() => this.handleFocus("nickname")}
          onRemove={() => this.handleRemove("nickname")}
          focus={focus}
          warning="2~10자의 한글 영문자 숫자만 입력가능합니다."
          valid={nickValid}
          label="닉네임"
        />
        <NewLabelInput
          type="email"
          name="username"
          placeholder="example@baemin.com"
          value={username}
          onChange={this.handleChange}
          onFocus={() => this.handleFocus("username")}
          onRemove={() => this.handleRemove("username")}
          focus={focus}
          warning="잘못된 이메일 유형입니다."
          valid={userValid}
          label="이메일아이디"
        />
        <NewLabelInput
          type="password"
          name="password"
          placeholder="8~20자로 입력해주세요"
          value={password}
          onChange={this.handleChange}
          onFocus={() => this.handleFocus("password")}
          onRemove={() => this.handleRemove("password")}
          focus={focus}
          warning="8~20자의 영문자, 숫자만 가능합니다."
          valid={passValid}
          label="비밀번호"
        />
        <NewLabelInput
          type="tel"
          name="phone"
          placeholder="11자로 입력해주세요"
          value={phone}
          onChange={this.handleChange}
          onFocus={() => this.handleFocus("phone")}
          onRemove={() => this.handleRemove("phone")}
          focus={focus}
          warning="11자의 숫자만 가능합니다."
          valid={phoneValid}
          label="휴대번호"
        />
      </Page>
    );
  }
}

export default NewJoin;
