import React, { Component } from "react";
import styles from "./StoreReviewTap.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class StoreReviewTap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 리뷰탭에 사진리뷰버튼 활성화 여부
      activePhotoReviewBtn: false,
      // 리뷰탭에 리뷰 정렬 버튼 활성화 상태
      orderBtn: ""
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
    // const { onHandlePhotoReviewBtn, onHandleOrderBtn } = this.props;
    const { activePhotoReviewBtn, orderBtn } = this.state;
    return (
      <>
        <div className={cx("ReviewTapContainer")}>
          <div className={cx("TopContainer")}>
            <button className={cx("reviewBtn")}>✏️ 리뷰를 남겨주세요</button>
          </div>
          <div className={cx("MiddleContainer")}>
            <span className={cx("title")}>📣 알려드립니다</span>
            안녕하세요
          </div>
          <div className={cx("border")} />
          <div className={cx("ReviewListContainer")}>
            <div className={cx("TitleContainer")}>
              <span className={cx("title")}>
                총 <p>{0}</p>개의 리뷰가 있어요
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
            <div className={cx("listItem")}>listItem</div>
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
