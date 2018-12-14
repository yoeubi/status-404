import React, { Component } from "react";
import styles from "./ReviewWrite.module.scss";
import classNames from "classnames/bind";
import Rating from "react-rating";
//svg
import { ReactComponent as BackBtn } from "../../svg/arrow-left.svg";
import { ReactComponent as Star } from "../../img/star.svg"; // 별 아이콘
import { ReactComponent as Camera } from "../../img/camera.svg"; // 카메라 아이콘
import { ReactComponent as Down } from "../../svg/chevron-right.svg"; // 오른쪽 화살표

const cx = classNames.bind(styles);
// const React = require("react");

export default class ReviewWrite extends Component {
  static defaultProps = {
    file: null
  };
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  render() {
    const {
      onReviewWritePage,
      review,
      onUserInput,
      onSubmitBtn,
      name
    } = this.props;
    const { file } = this.state;
    return (
      <div className={cx("container")}>
        <div className={cx("HeaderContainer")}>
          <button className={cx("backBtn")} onClick={onReviewWritePage}>
            <BackBtn />
          </button>
          <h1 className={cx("Header")}>{name}</h1>
          <div className={cx("Stars")} onClick={onReviewWritePage}>
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
                4.5 // 레이팅 정보
              }
              readonly
            />
          </div>
        </div>
        <div className={cx("BodyContainer")}>
          <form className={cx("InputForm")} onSubmit={onSubmitBtn}>
            <label>
              <textarea
                autoComplete="off"
                placeholder="가슴은 뜨겁게, 리뷰는 솔직하게 작성해주세요"
                value={review}
                onChange={onUserInput}
              />
            </label>
            <input className={cx("SubmitBtn")} type="submit" value="완료" />
          </form>
          <div className={cx("Camera")}>
            <input
              className={cx("FileInput")}
              type="file"
              onChange={event => this.handleChange(event)}
            />
            <Camera />
          </div>
          <div className={cx("Photo")}>
            <img src={this.state.file} alt={file} />
          </div>
          <div className={cx("FooterContainer")}>
            <span className={cx("Guide")}>
              솔직하게 작성하신 리뷰는 주문을 고민하는 분들께 큰 도움이 됩니다.
              하지만 허위 리뷰나 명예훼손, 욕설, 타인비방글 등
              <span className={cx("bold")}>
                설량한 업주나 제3자의 권리를 침해하는 게시물
              </span>
              은 서비스이용약관이나 관련 법률에 따라 제재를 받을 수 있습니다.
            </span>
            <span className={cx("GuideBtn")}>
              자세히 보기
              <Down className={cx("Down")} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
