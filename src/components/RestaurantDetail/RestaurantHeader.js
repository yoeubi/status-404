import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./RestaurantHeader.module.scss";
import classNames from "classnames/bind";

// SVG ICONS
import { ReactComponent as Heart } from "../../img/heart.svg"; // 하트 아이콘
import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg"; // 뒤로가기 아이콘

const cx = classNames.bind(styles);

class RestaurantHeader extends Component {
  static defaultProps = {
    // 상점 이름
    name: "상점 이름"
  };

  constructor(props) {
    super(props);
    this.state = {
      // 스크롤 이벤트 flag
      isTop: true
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

  render() {
    const {
      history: { goBack },
      name
    } = this.props;
    const { isTop } = this.state;

    return (
      <div className={cx("HeaderWrap", { Scroll: !isTop })}>
        <ChevronLeft className={cx("Prev")} onClick={() => goBack()} />
        <h1 className={cx("Title")}>{name}</h1>
        <Heart className={cx("Like")} />
      </div>
    );
  }
}

export default withRouter(RestaurantHeader);
