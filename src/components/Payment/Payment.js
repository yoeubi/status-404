import React, { Component } from "react";
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
import withLoading from "../../HOC/withLoading";

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
    address: "",
    detail_address: "",
    old_address: "",
    payment: "",
    phone: "",
    request: ""
  };
  componentDidMount() {
    const {
      user: {
        phone,
        address: [{ address, detail_address, old_address }]
      },
      cart: { payment }
    } = this.props;
    this.setState({
      address,
      detail_address,
      old_address,
      payment,
      phone
    });
  }
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
      [e.target.name]: e.target.value
    });
  };
  render() {
    const {
      address,
      old_address,
      phone,
      request,
      detail_address,
      payment
    } = this.state;
    const {onPay} = this.props;
    return (
      <div className={cx("payment")}>
        <BackHeader backURL="/cart" title="" />
        <HighLight
          title="배달정보"
          style={{ marginTop: "5rem", paddingTop: "0.5rem" }}
        />
        <Detail main={old_address} sub={`(도로명) ${address}`} />
        <CustomInput
          type="text"
          value={detail_address}
          name="detail_address"
          onChange={this.handleChange}
          placeholder="상세주소를 입력해주세요"
        />
        <CustomInput
          type="tel"
          value={phone}
          name="phone"
          onChange={this.handleChange}
          placeholder="전화번호를 입력해주세요"
        />
        <CustomCheckBox text="안심번호 사용" />
        <CustomInput
          type="text"
          value={request}
          name="request"
          onChange={this.handleChange}
          placeholder="요청사항을 입력해주세요"
        />
        <CustomCheckBox
          text="요청사항 저장"
          right={`${this.state.request.length}/40`}
        />
        <HighLight title="결제금액" />
        <Detail
          main={`${payment / 10}원`}
          sub={`주문금액 ${payment}원 배달의 민족 할인 90%`}
        />
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
            fontSize: "1.7rem",
            position: "fixed",
            bottom: "0",
            left: "0"
          }}
          onClick={onPay}
        >
          {payment/10}원 결제하기
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

export default withLoading(Payment);
