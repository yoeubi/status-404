import React, { Component } from "react";
import Payment from "../components/Payment";
import withAuth from "../HOC/withAuth";
import { withUser } from "../context/UserContext";
import withNoCart from "../HOC/withNoCart";
import {mainAPI} from '../api';

class PayContainer extends Component {
  componentDidMount() {
    var IMP = window.IMP; // 생략가능
    IMP.init("imp19043807");
  }
  handlePay = async ({ shipping, comment, phone, payment_option }) => {
    const { history, pullCart, addOrder  } = this.props;
    // TODO: 사용자 정보를 받아서 표시해야 함
    window.IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "merchant_" + new Date().getTime(),
        name: "주문명:결제테스트",
        amount: 1000,
        buyer_email: "iamport@siot.do",
        buyer_name: "구매자이름",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구 삼성동",
        buyer_postcode: "123-456"
      },
      async function(rsp) {
        if (rsp.success) {
          var msg = "결제가 완료되었습니다.";
          msg += "고유ID : " + rsp.imp_uid;
          msg += "상점 거래ID : " + rsp.merchant_uid;
          msg += "결제 금액 : " + rsp.paid_amount;
          msg += "카드 승인번호 : " + rsp.apply_num;
          try {
            await addOrder({
              shipping,
              comment,
              phone,
              payment_option
            });
            history.replace('/payresult');
          } catch (e) {
            console.log("결제 페이지 오류");
          } 
        } else {
          msg = "결제에 실패하였습니다.";
          msg += "에러내용 : " + rsp.error_msg;
          alert(msg);
        }
      }
    );
  };
  render() {
    return (
      <Payment
        {...this.props}
        loading={this.props.cart === null}
        onPay={this.handlePay}
      />
    );
  }
}

export default withUser( withAuth(PayContainer) );
