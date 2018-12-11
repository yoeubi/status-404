import React, { Component } from "react";
import styles from "./StoreInfoTap.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class StoreInfoTap extends Component {
  static defaultProps = {
    store_info: {
      id: null,
      section: "가게 소개",
      description:
        "대한민국 대표 찜닭 브랜드 봉추찜닭!!!\r\n\r\n더이상 말이 필요없는 그곳!!!\r\n\r\n최고의 찜닭을 이제 원하는곳에서도 드실수 있습니다."
    },
    store_statistics: {
      id: 1,
      section: "가게 통계",
      order: 4539,
      like: 177
    },
    delivery_tip: {
      id: 2,
      section: "배달팁 안내",
      fee: 1000,
      like: 177,
      region:
        "구의1동, 구의2동, 능동, 성수1가1동, 성수1가2동, 성수2가1동, 성수2가3동, 용답동, 자양1동, 자양2동, 자양3동, 자양4동, 장안1동, 중곡1동, 중곡2동, 중곡3동, 중곡4동"
    },
    guide: {
      id: 3,
      section: "안내 및 혜택",
      description:
        "- 세트메뉴를 제외한 모든메뉴 음료 별도입니다.\r\n\r\n- 방문포장할인\r\n\r\n- 모든피자메뉴 화아ㅣ트소스 변경가능"
    },
    operation: {
      id: 4,
      section: "영업 정보",
      time:
        "월: 14:00 ~ 20:50\r\n\r\n화: 14: 00 ~20: 50\r\n\r\n수: 14: 00 ~20: 50\r\n\r\n목: 14: 00 ~20: 50\r\n\r\n금: 14: 00 ~20: 50\r\n\r\n토: 14: 00 ~17: 50\r\n\r\n일: 12: 00 ~17: 50",
      break_time: "연중무휴",
      phone: "012-3456-7890"
    },
    location: {
      id: 5,
      section: "위치 정보",
      region: "성수전역, 자양4동, 화양, 송정, 군자, 능동, 중곡1, 2동"
    },
    business: {
      id: 6,
      section: "사업자 정보",
      owner: "박윤재",
      name: "패스트 피자",
      address: "서울 성동구 성수2가3동 289-10 제강빌딩 8층",
      number: "123-45-67890"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      photoReivew: false,
      orderTaps: "date-order"
    };
  }

  render() {
    const {
      store_info,
      store_statistics,
      delivery_tip,
      guide,
      operation,
      location,
      business,
      activeTab
    } = this.props;
    return (
      <>
        <div className={cx("InfoTapContainer", { open: activeTab === "info" })}>
          <div className={cx("section")}>
            <span className={cx("title")}>가게 소개</span>
            <span className={cx("storeInfoText")}>
              {store_info.description}
            </span>
          </div>
          <div className={cx("section")}>
            <span className={cx("title")}>가게 통계</span>
            <div className={cx("textArea")}>
              <span className={cx("subTitle")}>주문수</span>
              <span className={cx("text")}>
                {store_statistics.order.toLocaleString()}
              </span>
              <span className={cx("subTitle")}>찜</span>
              <span className={cx("text")}>
                {store_statistics.like.toLocaleString()}
              </span>
            </div>
          </div>
          <div className={cx("section")}>
            <span className={cx("title")}>배달팁 안내</span>
            <span className={cx("titleText")}>
              가게운영방침에 따라 지역, 특정 시간에 배달팁이 추가됩니다. 아래
              배달팁 상세를 참고해주세요
            </span>
            <div className={cx("textArea")}>
              <span className={cx("subTitle")}>지역</span>
              <span className={cx("deliveryTip")}>
                {delivery_tip.fee.toLocaleString()}원
                <span className={cx("text")}>{delivery_tip.region}</span>
              </span>
            </div>
          </div>
          <div className={cx("section")}>
            <span className={cx("title")}>안내 및 혜택</span>
            <div className={cx("textArea")}>
              <span className={cx("subTitle")}>안내</span>
              <span className={cx("text")}>{guide.description}</span>
            </div>
          </div>
          <div className={cx("section")}>
            <span className={cx("title")}>영업 정보</span>
            <div className={cx("textArea")}>
              <span className={cx("subTitle")}>운영시간</span>
              <span className={cx("text")}>{operation.time}</span>
              <span className={cx("subTitle")}>휴무일</span>
              <span className={cx("text")}>{operation.break_time}</span>
              <span className={cx("subTitle")}>전화번호</span>
              <span className={cx("text")}>
                <span className={cx("textTel")}>{operation.phone}</span>
                050번은 배달의민족에서 제공하는 번호입니다
              </span>
            </div>
          </div>
          <div className={cx("section")}>
            <span className={cx("title")}>위치 정보</span>
            <div className={cx("textArea")}>
              <span className={cx("subTitle")}>배달지역</span>
              <span className={cx("text")}>{location.region}</span>
            </div>
          </div>
          <div className={cx("section")}>
            <span className={cx("title")}>사업자 정보</span>
            <div className={cx("textArea")}>
              <span className={cx("subTitle")}>대표자명</span>
              <span className={cx("text")}>{business.owner}</span>
              <span className={cx("subTitle")}>상호명</span>
              <span className={cx("text")}>{business.name}</span>
              <span className={cx("subTitle")}>사업자주소</span>
              <span className={cx("text")}>{business.address}</span>
              <span className={cx("subTitle")}>사업자 등록번호</span>
              <span className={cx("text")}>{business.number}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
