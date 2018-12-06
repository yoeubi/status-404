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

const cx = classNames.bind(styles);

class Payment extends Component {
  render() {
    return <div className={cx("payment")}>
        <BackHeader backURL="/" title="" />
        <HighLight title="배달정보" style={{ marginTop: "5rem", paddingTop: "0.5rem" }} />
        <Detail main="노원구 상계동 666" sub="(도로명) 노원로 564" />
        <CustomInput type="text" value="주공10단지 1018-101" onChange={() => console.log("커스텀 인풋 실행중")} placeholder="상세주소를 입력해주세요" />
        <CustomInput type="tel" value="01072278748" onChange={() => console.log("커스텀 인풋 실행중")} placeholder="전화번호를 입력해주세요" />
        <CustomCheckBox text="안심번호 사용" />
        <CustomInput type="text" value="1" onChange={() => console.log("커스텀 인풋 실행중")} placeholder="요청사항을 입력해주세요" />
        <CustomCheckBox text="요청사항 저장" right="0/40" />
        <HighLight title="결제금액" />
        <Detail main="23400원" sub="주문금액 20400원 + 배달팁 3000원" />
        <RightNothing title="카드결제" right="변경" />
        <Nothing style={{color : '#999', fontSize : '1.5rem', marginBottom :'6rem' }}>
          위 내용을 확인하였으며 결제에 동의합니다.
        </Nothing>
        <Nothing style={{ background: "#2fc0be", color: "#fff", fontSize: "2rem" , position :'fixed', bottom :'0' , left : '0' }}>
          <Link to="/">23400원 결제하기</Link>
        </Nothing>
      </div>;
  }
}

export default Payment;
