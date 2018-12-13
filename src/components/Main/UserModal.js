import React, { Component } from "react";
import styles from "./UserModal.module.scss";
import classNames from "classnames/bind";
import { withUi } from "../../context/UiContext";
import { Link } from "react-router-dom";

import { ReactComponent as Avater } from "../../img/mark-github.svg";
import { ReactComponent as Coin } from "../../img/coins.svg";
import { ReactComponent as Coupon } from "../../img/coupon.svg";
import { ReactComponent as Cart } from "../../img/shopping-cart.svg";
import { ReactComponent as Payment } from "../../img/payment.svg";
import { ReactComponent as Heart } from "../../img/heart.svg";
import { ReactComponent as Review } from "../../img/consulting-message.svg";
import { ReactComponent as BannerImg01 } from "../../img/banner_img_01.svg";
import { ReactComponent as BannerImg02 } from "../../img/banner_img_02.svg";

const cx = classNames.bind(styles);

class UserModal extends Component {
  static defaultProps = {
    navList: [
      {
        id: 0,
        title: "포인트",
        img: <Coin />,
        url: ""
      },
      {
        id: 1,
        title: "쿠폰함",
        img: <Coupon />,
        url: ""
      },
      {
        id: 2,
        title: "장바구니",
        img: <Cart />,
        url: "/cart"
      },
      {
        id: 3,
        title: "주문내역",
        img: <Payment />,
        url: "/myorder"
      },
      {
        id: 4,
        title: "단골매장",
        img: <Heart style={{ fill: "#F25452", stroke: "black" }} />,
        url: ""
      },
      {
        id: 5,
        title: "리뷰관리",
        img: <Review />,
        url: ""
      }
    ]
  };
  componentDidMount() {
    console.log("UserModal componentDidMount");
  }
  componentWillUnmount() {
    const { handleBodyOnModal } = this.props;
    handleBodyOnModal("close");
  }
  render() {
    const {
      handleBodyOnModal,
      user,
      showModal,
      onUserModal,
      navList,
      numberOfCartItem
    } = this.props;
    // FIXME :: 모달 활성화시 Layout 에스크롤이 생기지 않게 하기 위해 css 트릭을 적용하였으나
    //          활성화시 어떤 위치에서도 최상단으로 이동하는 버그가 있어서 해결해야 함
    return (
      <div
        onClick={() => {
          handleBodyOnModal("close");
          onUserModal();
        }}
        className={cx("background", { show: showModal })}
      >
        <div
          onClick={e => {
            // 클릭 이벤트시 background 엘리먼트까지 이벤트가 전달되면
            // onUserModal 이 실행되기 때문에 이벤트를 막아놓았다.
            e.stopPropagation();
          }}
          className={cx("modal")}
        >
          {user.username ? (
            // 로그인시 : user 존재시
            <div className={cx("header")}>
              <Avater className={cx("avartar")} />
              <Link
                // click 시 profile 페이지 렌더링과 동시에 모달이 사라지도록
                // 일단 사라지도록 해놓았으나 기획에 따라 유지할수 있음
                onClick={onUserModal}
                to="/profile"
                className={cx("user")}
              >
                <p className={cx("colored")}>{user.nickname}</p>
                <p className={cx("username")}>{user.username}</p>
                <p className={cx("point", "colored")}>0p</p>
              </Link>
            </div>
          ) : (
            // 미로그인시 : user === null
            <div className={cx("headerNoLogin")}>
              <div className={cx("headerNoLoginBanner")}>
                <BannerImg02 />
              </div>
              <Link to="/login" className={cx("headerLogin")}>
                로그인
              </Link>
            </div>
          )}

          <div>
            <ul className={cx("nav")}>
              {navList.map(n => {
                if (n.id === 2) {
                  // 장바구니 dom 추가
                  return (
                    <li key={n.id} className={cx("item")}>
                      <Link to={n.url}>
                        <span className={cx("cartAmount")}>
                          {numberOfCartItem}
                        </span>
                        {n.img}
                        {n.title}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={n.id} className={cx("item")}>
                    <Link to={n.url}>
                      {n.img}
                      {n.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={cx("banner")}>
            <BannerImg01 />
          </div>
          <div>
            <ul className={cx("menu")}>
              <li className={cx("item")}>공지사항</li>
              <li className={cx("item")}>이벤트</li>
              <li className={cx("item")}>광고문의</li>
              <li className={cx("item")}>1:1 문의하기</li>
              <li className={cx("item")}>환경설정</li>
            </ul>
          </div>
          <div className={cx("footer")}>
            <p>
              <span>배달의민족 콜센터</span>
              <span>1644-0025</span>
              <span>(24시간 운영, 연중무휴)</span>
            </p>
            <p>
              <span>
                Copyright Status 404 in Fastcampus. All Rights Reserved.
              </span>
              <span>Version 8.9.1</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withUi(UserModal);
