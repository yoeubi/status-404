import React, { Component } from "react";

import Header from "./RestaurantHeader";
import MenuView from "./RestaurantMenu";
import RestaurantSummary from "./RestaurantSummary";
import OriginInfo from "./OriginInfo";

import styles from "./RestaurantDetailView.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class RestaurantDetailView extends Component {
  static defaultProps = {
    store: {
      id: null,
      name: "배민 상점",
      rating: 4.5, // 상점 별점
      userId: null,
      is_register: null, // 상점 생성 시간?
      address: "배민구 배민동 000",
      store_category: "상점 카테고리",
      store_info: "상점 정보",
      origin_info: "원산지 정보",
      img_profile:
        "https://cdn.dominos.co.kr/admin/upload/goods/20180827_ca1sFpdy.jpg"
    },
    delevery: {
      id: null,
      // least_const :: 최소 주문 금액
      least_const: 13000,
      // take_out :: 배달여부(?)
      take_out: null,
      // fee :: 배달료
      fee: 2000
    },
    food: {
      id: null,
      name: "음식이름",
      store_Id: null,
      price: null,
      is_register: null,
      img_profile: null
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      // 스크롤 이벤트 flag
      isTop: true,
      // actvieTab: 'menu', 'info','review'
      activeTab: "menu"
    };
  }

  componentDidMount() {
    // add scroll event
    document.addEventListener("scroll", this.handleIsTop);
  }
  componentWillUnmount() {
    // remove scroll event :: 컴포넌트 언마운트 시에 document 객체에 scroll 이벤트리스너를 제거한다.
    document.removeEventListener("scroll", this.handleIsTop);
  }

  handleIsTop = () => {
    // 스크롤시 최상단 판별 함수
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  };

  handleTabActive = tabName => {
    // 메뉴, 정보, 리뷰 탭 활성화 관련 상태 관리 함수
    this.setState({
      activeTab: tabName
    });
  };

  render() {
    const { isTop, activeTab } = this.state;
    const {
      match: {
        // storeId
        params: { id }
      }
    } = this.props;
    const { name, address, img_profile, rating } = this.props.store; // 스토어 정보
    // const { least_const, take_out, fee } = this.props.delevery; // 배달 정보
    // const { name, price, img_profile } = this.props.food; // 음식 정보
    console.log({ id, address });
    return (
      <div className={cx("RestaurantDetailWrap")}>
        <Header isTop={isTop} name={name} />

        <RestaurantSummary
          name={name}
          rating={rating}
          img_profile={img_profile}
        />

        <ul className={cx("Tab")}>
          <li
            onClick={() => this.handleTabActive("menu")}
            className={cx("Menu", { Active: activeTab === "menu" })}
          >
            메뉴
          </li>
          <li
            onClick={() => this.handleTabActive("info")}
            className={cx("Info", { Active: activeTab === "info" })}
          >
            정보
          </li>
          <li
            onClick={() => this.handleTabActive("review")}
            className={cx("Review", { Active: activeTab === "review" })}
          >
            리뷰
          </li>
        </ul>

        <div className={cx("Body")}>
          {activeTab === "menu" ? (
            <MenuView title={"menu"} />
          ) : activeTab === "info" ? (
            <MenuView title={"info"} />
          ) : activeTab === "review" ? (
            <MenuView title={"review"} />
          ) : null}
        </div>

        <OriginInfo />
      </div>
    );
  }
}

export default RestaurantDetailView;
