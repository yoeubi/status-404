import React, { Component } from "react";
// react-rating
// DOC :: https://www.npmjs.com/package/react-rating
import Rating from "react-rating";

import Header from "./RestaurantHeader";
import MenuView from "./MenuView";

import styles from "./RestaurantDetailView.module.scss";
import classNames from "classnames/bind";

// SVG ICONS
import { ReactComponent as Heart } from "../../img/heart.svg"; // 하트 아이콘
import { ReactComponent as Star } from "../../img/star.svg"; // 뒤로가기 아이콘
import { ReactComponent as ArrowUp } from "../../img/arrow-up.svg";

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
    document.addEventListener("scroll", this.isTop);
  }
  componentWillUnmount() {
    // remove scroll event :: 컴포넌트 언마운트 시에 document 객체에 scroll 이벤트리스너를 제거한다.
    document.removeEventListener("scroll", this.isTop);
  }

  isTop = () => {
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

    return (
      <div className={cx("")}>
        <Header isTop={isTop} name={name} />

        <div className={cx("Summary")}>
          <div className={cx("ImgProfile")}>
            <img style={{ width: "100%" }} src={img_profile} alt={name} />{" "}
          </div>
          <div className={cx("BasicInfo")}>
            <h2>{name}</h2>
            <div className={cx("Stars")}>
              <Rating
                // 빈 별
                emptySymbol={<Star className={cx("Star", "Empty")} />}
                // 꽉찬별
                fullSymbol={<Star className={cx("Star")} />}
                // 분할
                fractions={2}
                // 레이팅 정보
                initialRating={rating}
                readonly
              />
              <span className={cx("Rating")}>{rating}</span>
            </div>
            <div className={cx("Reviews")}>
              <span>최근 리뷰 00</span> | <span>사장님 최근 댓글 00</span>
            </div>
          </div>

          <ul className={cx("OrderInfo")}>
            <li>
              <label>결재방법</label><span>바로결재, 만나서 결재</span>
            </li>
            <li>
              <label>최소주문금액</label><span>13,000 원</span>
            </li>
            <li>
              <label>배달시간</label>
              <span>45분 소요 예상</span>
            </li>
            <li>
              <label>배달팁</label><span>2,000원</span>
            </li>
          </ul>

          <div className={cx("SNS")}>
            <button>
              <Heart /> <span>찜 351</span>
            </button>
            <button>
              <ArrowUp />
              공유
            </button>
          </div>

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
        </div>

        <div className={cx("Body")}>
          {activeTab === "menu" ? (
            <MenuView title={"menu"} />
          ) : activeTab === "info" ? (
            <MenuView title={"info"} />
          ) : activeTab === "review" ? (
            <MenuView title={"review"} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default RestaurantDetailView;
