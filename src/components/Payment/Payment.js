import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Payment.module.scss";
import classNames from "classnames/bind";
import Nothing from "../Nothing";
import BackHeader from "../BackHeader";
import HighLight from "../HighLight";
import Detail from "../Detail";
import CustomInput from "../CustomInput";
import RightNothing from "../RightNothing";
import CustomCheckBox from "../CustomCheckBox";
import Folding from "../Folding";
import PaymentMethod from "../PaymentMethod";

const cx = classNames.bind(styles);

class Payment extends Component {
  payList = [
    "네이버페이",
    "배민페이",
    "배민페이 계좌이체",
    "카드결제",
    "휴대폰결제",
    "페이코",
    "카카오페이"
  ];
  generalList = ["만나서 카드결제", "만나서 현금결제"];
  state = {
    popup: false,
    method: this.payList[0],
    // API로 디데일 주소 + 전화번호 받아오기
    detail : '',
    tel : '',
    request : ''
  };
  handlePopup = () => {
    this.setState({
      popup: !this.state.popup
    });
  };
  handleToggle = method => {
    this.setState({ method, popup: !this.state.popup });
  };
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {
    return (
      <div className={cx("payment")}>
        <BackHeader backURL="/" title="" />
        <HighLight
          title="배달정보"
          style={{ marginTop: "5rem", paddingTop: "0.5rem" }}
        />
        <Detail main="노원구 상계동 666" sub="(도로명) 노원로 564" />
        <CustomInput
          type="text"
          value={this.state.detail}
          name="detail"
          onChange={this.handleChange}
          placeholder="상세주소를 입력해주세요"
        />
        <CustomInput
          type="tel"
          value={this.state.tel}
          name="tel"
          onChange={this.handleChange}
          placeholder="전화번호를 입력해주세요"
        />
        <CustomCheckBox text="안심번호 사용" />
        <CustomInput
          type="text"
          value={this.state.request}
          name="request"
          onChange={this.handleChange}
          placeholder="요청사항을 입력해주세요"
        />
        <CustomCheckBox text="요청사항 저장" right={`${this.state.request.length}/40`} />
        <HighLight title="결제금액" />
        <Detail main="23400원" sub="주문금액 20400원 + 배달팁 3000원" />
        <RightNothing
          title={this.state.method}
          right="변경"
          handleClick={this.handlePopup}
          style={{ cursor: "pointer" }}
        />
        <Folding
          title="배달상품 주의사항"
          content="레알 배달의 민족이 아닙니다. 만약 끌리셨다면 yoeubi28@gmail.com 으로 연락주세요"
        />
        <Nothing
          style={{
            color: "#999",
            fontSize: "1.5rem",
            marginBottom: "6rem"
          }}
        >
          위 내용을 확인하였으며 결제에 동의합니다.
        </Nothing>
        <Nothing
          style={{
            background: "#2fc0be",
            color: "#fff",
            fontSize: "2rem",
            position: "fixed",
            bottom: "0",
            left: "0"
          }}
        >
          <Link to="/">23400원 결제하기</Link>
        </Nothing>
        <PaymentMethod
          payList={this.payList}
          generalList={this.generalList}
          method={this.state.method}
          handlePopup={this.handlePopup}
          popup={this.state.popup}
          handleToggle={this.handleToggle}
        />
      </div>
    );
  }
}

export default Payment;
