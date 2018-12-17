import React, { Component } from "react";
import styles from "./StoreReviewTap.module.scss";
import classNames from "classnames/bind";
import Rating from "react-rating";

// SVG ICON
import { ReactComponent as Star } from "../../img/star.svg"; // 별 아이콘
import { ReactComponent as Right } from "../../svg/chevron-right.svg"; // 오른쪽 화살표

const cx = classNames.bind(styles);

export default class StoreReviewTap extends Component {
  static defaultProps = {
    users: [
      {
        pk: null,
        id: 0,
        username: "박윤재",
        nickname: "윤재",
        phone: "010-1234-5678",
        img_profile:
          "http://mblogthumb4.phinf.naver.net/20151117_151/smartbaedal_1447748320696qYGB3_JPEG/12109275_986494971373814_8759974093703893190_n.jpg?type=w2",
        review: [
          {
            id: 0,
            content:
              "맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! 맛있네요! ",
            rating: 5,
            store: "패스트 피자"
          }
          // {
          //   id: 1,
          //   content: "맛없어요... ",
          //   rating: 1,
          //   store: "패스트 치킨"
          // }
        ]
      },
      {
        pk: null,
        id: 1,
        username: "나배민",
        nickname: "배민",
        phone: "011-1234-5678",
        img_profile:
          "http://mblogthumb4.phinf.naver.net/20151117_151/smartbaedal_1447748320696qYGB3_JPEG/12109275_986494971373814_8759974093703893190_n.jpg?type=w2",
        review: [
          {
            id: 0,
            content:
              "맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! 맛없네요! ",
            rating: 1,
            store: "패스트 피자"
          }
        ]
      },
      {
        pk: null,
        id: 2,
        username: "나배달",
        nickname: "배달",
        phone: "016-1234-5678",
        img_profile:
          "http://mblogthumb4.phinf.naver.net/20151117_151/smartbaedal_1447748320696qYGB3_JPEG/12109275_986494971373814_8759974093703893190_n.jpg?type=w2",
        review: [
          {
            id: 0,
            content:
              "보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요 보통이네요",
            rating: 3,
            store: "패스트 피자"
          }
        ]
      }
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      // 리뷰탭에 사진리뷰버튼 활성화 여부
      activePhotoReviewBtn: false,
      // 리뷰탭에 리뷰 정렬 버튼 활성화 상태
      orderBtn: ""
      // show: false
    };
  }

  // 리뷰탭에 '사진리뷰만' 버튼 활성화 상태 관리 함수
  handlePhotoReviewBtn = () => {
    this.setState(prevState => ({
      activePhotoReviewBtn: !prevState.activePhotoReviewBtn
    }));
    console.log("PhotoReviewBtn Active");
  };

  // 리뷰탭에 리뷰 정렬 순서 버튼 상태 관리 함수
  handleOrderBtn = btnName => {
    this.setState({
      orderBtn: btnName
    });
  };

  render() {
    const { users, onReviewWriteModal, activeTab, store_info } = this.props;
    const { activePhotoReviewBtn, orderBtn } = this.state;
    return (
      <>
        <div
          className={cx("ReviewTapContainer", {
            open: activeTab === "review"
          })}
        >
          <div className={cx("TopContainer")}>
            <button onClick={onReviewWriteModal} className={cx("reviewBtn")}>
              <span role="img" aria-label="Review">
                ✏️ 리뷰를 남겨주세요
              </span>
            </button>
          </div>
          <div className={cx("MiddleContainer")}>
            <span className={cx("title")} role="img" aria-label="Inform">
              📣 알려드립니다
            </span>
            <span className={cx("content")}>{store_info}</span>
          </div>
          <div className={cx("border")} />
          <div className={cx("ReviewListContainer")}>
            <div className={cx("TitleContainer")}>
              <span className={cx("title")}>
                총 <p>{3}</p>개의 리뷰가 있어요
              </span>
              <div className={cx("listOrderContainer")}>
                <button
                  onClick={() => this.handlePhotoReviewBtn()}
                  className={cx("photoReviewBtn", {
                    Active: activePhotoReviewBtn
                  })}
                >
                  <div className={cx("checkBox")}>✓</div> 사진리뷰만
                </button>
                <div className={cx("rightSide")}>
                  <button
                    onClick={() => this.handleOrderBtn("dateOrder")}
                    className={cx("dateOrder", {
                      Active: orderBtn === "dateOrder"
                    })}
                  >
                    작성순
                  </button>
                  <span className={cx("divider")} />
                  <button
                    onClick={() => this.handleOrderBtn("helpfulOrder")}
                    className={cx("helpfulOrder", {
                      Active: orderBtn === "helpfulOrder"
                    })}
                  >
                    도움순
                  </button>
                </div>
              </div>
            </div>
            <ul>
              {users.map(u => (
                <li className={cx("listItem")} key={u.id}>
                  <div className={cx("HeadContainer")}>
                    <div className={cx("Avatar")}>
                      <img src={u.img_profile} alt={u.username} />
                    </div>
                    <div className={cx("IdContainer")}>
                      <span className={cx("NickName")}>{u.nickname}</span>
                      <Right
                        className={cx("Right")}
                        style={{ transform: "scale(1.5)", fill: "#666" }}
                      />
                      {/* <div className={cx("Rating")}>
                        {u.review[0].rating} ️ ️ ️ ️ ️ ️
                      </div> */}
                      <div className={cx("Stars")}>
                        <Rating
                          emptySymbol={
                            <Star
                              className={
                                cx("Star", "Empty") // 빈 별
                              }
                            />
                          }
                          fullSymbol={
                            <Star
                              className={
                                cx("Star") // 꽉찬별
                              }
                            />
                          }
                          fractions={
                            2 // 분할
                          }
                          initialRating={
                            u.review[0].rating // 레이팅 정보
                          }
                          readonly
                        />
                        <span className={cx("Rating")}>
                          {u.review[0].rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={cx("ContentContainer")}>
                    <div className={cx("Content")}>{u.review[0].content}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

// // 왜 안되는거지?
// <label htmlFor="photoReviewBtn" class={cx("container")}>One
//   <input type="checkbox" checked="checked" name="photoReviewBtn">
//   <span class={cx("checkmark")}></span>
// </label>
