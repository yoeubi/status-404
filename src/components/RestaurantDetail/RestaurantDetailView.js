import React, { Component } from "react";

import Header from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantSummary from "./RestaurantSummary";
import OriginInfo from "./OriginInfo";
import CartBtn from "./CartBtn";
import StoreInfoTap from "./StoreInfoTap";
import StoreReviewTap from "./StoreReviewTap";
import Loading from "../Loading";

import styles from "./RestaurantDetailView.module.scss";
import classNames from "classnames/bind";
import ProductModalView from "./ProductModalView";

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
      activeTab: "menu",
      // 상품 옵션 모달 호출 : true,false
      productModal: false
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

  handleProductModal = () => {
    // 상품 옵션 선택 모달 호출 함수
    this.setState(prevState => ({
      productModal: !prevState.productModal
    }));
  };

  render() {
    const { isTop, activeTab, productModal } = this.state;
    const {
      match: {
        // storeId
        params: { id }
      }
    } = this.props;
    const { name, address, img_profile, rating } = this.props.store; // 스토어 정보
    // const { least_const, take_out, fee } = this.props.delevery; // 배달 정보
    // const { name, price, img_profile } = this.props.food; // 음식 정보
    const { menus } = this.props;
    // console.log({ id, address });
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
            <>
              <RestaurantMenu title={"menu"} />
              <OriginInfo />
            </>
          ) : activeTab === "info" ? (
            <StoreInfoTap />
          ) : activeTab === "review" ? (
            <StoreReviewTap />
          ) : null}
        </div>

        <CartBtn fixed={true} />
        <ProductModalView
          show={productModal}
          name={name}
          onProductModal={this.handleProductModal}
        />
        <Loading />
      </div>
    );
  }
}

export default RestaurantDetailView;
