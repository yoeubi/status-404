import React, { Component } from "react";
import styles from "./MyOrderList.module.scss";
import classNames from "classnames/bind";
// import { Link } from "react-router-dom";
// import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg";

import { ReactComponent as Hansik } from "../../img/01_hansik.svg";
import { ReactComponent as Bunsik } from "../../img/02_bunsik.svg";
import { ReactComponent as Ilsik } from "../../img/03_ilsik.svg";
import { ReactComponent as Chicken } from "../../img/04_chicken.svg";
import { ReactComponent as Pizza } from "../../img/05_pizza.svg";
import { ReactComponent as Chinese } from "../../img/06_chinese.svg";
import { ReactComponent as Zokbal } from "../../img/07_zokbal.svg";
import { ReactComponent as Yasik } from "../../img/08_yasik.svg";
import { ReactComponent as Zzim } from "../../img/09_zzim.svg";
import { ReactComponent as Dosirak } from "../../img/10_dosirak.svg";
import { ReactComponent as Desert } from "../../img/11_desert.svg";
import { ReactComponent as Fastfood } from "../../img/12_fastfood.svg";
import { ReactComponent as Franchise } from "../../img/13_franchise.svg";
import { ReactComponent as Matzip } from "../../img/14_matzip.svg";
import { ReactComponent as EmptyOrder } from "../../img/empty_order.svg";

const cx = classNames.bind(styles);

class MyOrderList extends Component {
  static defaultProps = {
    myorder: [
      {
        id: 0,
        category_Id: 1,
        date: "3일전",
        store_name: "백종원의 골목식당",
        ordered_menu: ["한식은 백종원찡", "백종원 짱짱"],
        ordered_price: 14000,
        writed_review: true
      },
      {
        id: 1,
        category_Id: 12,
        date: "12월 4일",
        store_name: "써브웨이 아산 온양점",
        ordered_menu: ["스테이트&치즈", "에그마요", "아보카도맨"],
        ordered_price: 18800,
        writed_review: false
      },
      {
        id: 2,
        category_Id: 3,
        date: "12월 5일",
        store_name: "돈까스&냉면 9단",
        ordered_menu: [
          "정성돈까스",
          "치즈돈까스",
          "치즈돈까스",
          "치즈맨돈까스"
        ],
        ordered_price: 23000,
        writed_review: false
      }
    ]
  };

  translateIdToIcon = id => {
    if (id === 1) {
      return <Hansik />;
    } else if (id === 2) {
      return <Bunsik />;
    } else if (id === 3) {
      return <Ilsik />;
    } else if (id === 4) {
      return <Chicken />;
    } else if (id === 5) {
      return <Pizza />;
    } else if (id === 6) {
      return <Chinese />;
    } else if (id === 7) {
      return <Zokbal />;
    } else if (id === 8) {
      return <Yasik />;
    } else if (id === 9) {
      return <Zzim />;
    } else if (id === 10) {
      return <Dosirak />;
    } else if (id === 11) {
      return <Desert />;
    } else if (id === 12) {
      return <Fastfood />;
    } else if (id === 13) {
      return <Franchise />;
    } else if (id === 14) {
      return <Matzip />;
    }
  };

  translateTime = data => {
    const date = new Date(data);
    return date.toLocaleDateString();
  };

  render() {
    const { myorder } = this.props;

    return (
      <React.Fragment>
        {myorder.length > 0 ? (
          <ul className={cx("List")}>
            {myorder.map(o => (
              <li key={o.pk} className={cx("Item")}>
                <div className={cx("OrderDate")}>
                  {/* <span className={cx("Icon")}>
                    {this.translateIdToIcon(o.category_Id)}
                  </span> */}
                  <span className={cx("Date")}>
                    {this.translateTime(o.created_at)}
                  </span>
                </div>
                <div className={cx("StoreName")}>
                  {o.store[0].store}
                  {o.store.length > 1 &&
                    " 외 " + (o.store.length - 1) + " 개 상점"}
                </div>
                <div className={cx("OrderedMenuPrice")}>
                  {/* <span>{o.paymentpayment_option}</span> */}
                  <span>배송지 : {o.shipping}</span>
                </div>
                <div className={cx("OrderedMenuPrice")}>
                  {/* <span>{o.paymentpayment_option}</span> */}
                  <span>주문금액 : {o.payment.toLocaleString()} 원</span>
                </div>

                {/* <div className={cx("OrderAgain")}>
                  <button className={cx("Again")}>다시 주문하기</button>
                  {o.writed_review && (
                    <button className={cx("Review")}>
                      <span className={cx("Title")}>리뷰 쓰기</span>
                      <span className={cx("Caption")}>(7일간 작성 가능)</span>
                    </button>
                  )}
                </div> */}
              </li>
            ))}
          </ul>
        ) : (
          <div className={cx("EmptyOrder")}>
            <EmptyOrder />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MyOrderList;
