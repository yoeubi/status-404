import React, { Component } from "react";

import Header from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantSummary from "./RestaurantSummary";

import CartBtn from "./CartBtn";
import withLoading from "../../HOC/withLoading";
import StoreInfoTap from "./StoreInfoTap";
import { withUi } from "../../context/UiContext";

import styles from "./RestaurantDetailView.module.scss";
import classNames from "classnames/bind";
import ProductModalView from "./ProductModalView";
import StoreReviewTapContainer from "../../containers/StoreReviewTapContainer";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../../transition.scss";

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
      // actvieTab: 'menu', 'info','review'
      activeTab: "menu",
      // 상품 옵션 모달 호출 : true,false
      productModal: false
    };
  }

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
    const { activeTab, productModal } = this.state;
    const {
      name,
      storeimage_set,
      fee,
      least_cost,
      rating,
      menu,
      origin_info,
      store_info
    } = this.props.store; // 스토어 정보
    const {
      handleBodyOnModal,
      selectedMenuOnModal,
      selectedMenu,
      addItemToCart,
      cart
    } = this.props;
    return (
      <React.Fragment>
        <Header name={name} />
        <div
          className={cx("RestaurantDetailWrap", { ActiveModal: productModal })}
        >
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
            <RestaurantMenu
              info={origin_info}
              menu={menu}
              onProductModal={this.handleProductModal}
              onHandleBodyOnModal={handleBodyOnModal}
              selectedMenuOnModal={selectedMenuOnModal}
              activeTab={activeTab}
            />

            <StoreInfoTap
              fee={fee}
              store_info={store_info}
              activeTab={activeTab}
            />

            <StoreReviewTapContainer
              store_info={store_info}
              name={name}
              activeTab={activeTab}
            />
          </div>

          <CartBtn fixed={true} cart={cart} />
        </div>
        <TransitionGroup>
          {productModal && (
            <CSSTransition timeout={500} classNames="fadeRight">
              <ProductModalView
                cart={cart}
                addItemToCart={addItemToCart}
                name={name}
                selectedMenu={selectedMenu}
                least_cost={least_cost}
                onProductModal={this.handleProductModal}
                onHandleBodyOnModal={handleBodyOnModal}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default withUi(withLoading(RestaurantDetailView));
