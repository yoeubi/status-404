import React, { Component } from "react";

import Header from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantSummary from "./RestaurantSummary";
import OriginInfo from "./OriginInfo";
import CartBtn from "./CartBtn";
import withLoading from "../../HOC/withLoading";
import StoreInfoTap from "./StoreInfoTap";
import { withUi } from "../../context/UiContext";

import styles from "./RestaurantDetailView.module.scss";
import classNames from "classnames/bind";
import ProductModalView from "./ProductModalView";
import StoreReviewTapContainer from "../../containers/StoreReviewTapContainer";

const cx = classNames.bind(styles);

class RestaurantDetailView extends Component {
  static defaultProps = {
    store: {
      pk: null,
      name: "배민 상점",
      fee: 0,
      least_cost: 0,
      is_register: null, // 상점 생성 시간?
      address: "배민구 배민동 000",
      store_category: "상점 카테고리",
      store_info: "상점 정보",
      origin_info: "원산지 정보",
      img_profile:
        "https://cdn.dominos.co.kr/admin/upload/goods/20180827_ca1sFpdy.jpg"
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
      name,
      storeimage_set,
      fee,
      least_cost,
      rating,
      menu
    } = this.props.store; // 스토어 정보
    const { handleBodyOnModal } = this.props;
    return (
      <div className={cx("RestaurantDetailWrap")}>
        <Header isTop={isTop} name={name} />

        <RestaurantSummary
          name={name}
          rating={rating}
          storeimage_set={storeimage_set}
          fee={fee}
          least_cost={least_cost}
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
              <RestaurantMenu
                title={"menu"}
                menu={menu}
                onProductModal={this.handleProductModal}
                onHandleBodyOnModal={handleBodyOnModal}
              />
              <OriginInfo />
            </>
          ) : activeTab === "info" ? (
            <StoreInfoTap />
          ) : activeTab === "review" ? (
            <StoreReviewTapContainer name={name} />
          ) : null}
        </div>

        <CartBtn fixed={true} />
        <ProductModalView
          show={productModal}
          name={name}
          onProductModal={this.handleProductModal}
          onHandleBodyOnModal={handleBodyOnModal}
        />
      </div>
    );
  }
}

export default withUi(withLoading(RestaurantDetailView));
