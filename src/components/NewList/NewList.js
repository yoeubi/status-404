import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NewList.module.scss";
import classNames from "classnames/bind";
import Page from "../../Layout/Page";
import { ReactComponent as Left } from "../../svg/chevron-left.svg";
import { ReactComponent as Location } from "../../svg/location.svg";
import { ReactComponent as List } from "../../svg/list-unordered.svg";
import SlideMenu from "../SlideMenu";
import RestaurantItem from "../RestaurantItem";
import BlackCurtain from "../BlackCurtain";
import SearchList from "../SearchList";
import withModal from "../../HOC/withModal";
import withLoading from "../../HOC/withLoading";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../Loader";

const cx = classNames.bind(styles);

class NewList extends Component {
  state = {
    category: "",
    show: false
  };
  categoryList = [
    "한식",
    "일식",
    "카페",
    "양식",
    "분식",
    "햄버거",
    "치킨",
    "중식",
    "피자"
  ];
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.pk !== nextProps.pk ||
      this.state.show !== nextState.show ||
      this.props.results !== nextProps.result
    ) {
      return true;
    }
    return false;
  }

  handleScroll = scroll => {
    this.setState({
      scroll
    });
  };
  handleCategory = idx => {
    const { history } = this.props;
    if (+this.props.pk !== idx + 1) {
      history.push(`/category/${idx + 1}`);
      this.setState({
        show: false
      });
    }
  };
  handleModal = () => {
    this.setState(prev => {
      this.props.onModal(prev.show ? "close" : "open");
      return { show: !prev.show };
    });
  };
  render() {
    const category = this.categoryList[+this.props.pk - 1];
    const { show } = this.state;
    const { results } = this.props;
    const items = results.map(li => (
      <Link to={`/category/${this.props.pk}/store/${li.pk}`} key={li.pk}>
        <RestaurantItem
          name={li.name}
          logo={
            li.storeimage_set.length > 0
              ? li.storeimage_set[0].location
              : undefined
          }
          rating_average={li.rating_average}
        />
      </Link>
    ));
    return (
      <Page
        left={
          <Link to="/" style={{ padding: "1.5rem" }}>
            <Left style={{ transform: "scale(1.5)" }} />
          </Link>
        }
        middle={category}
        right={
          <div className={cx("util")}>
            <div>
              <Location style={{ transform: "scale(1.5)" }} />
            </div>
            <div onClick={this.handleModal}>
              <List style={{ transform: "scale(1.5)" }} />
            </div>
          </div>
        }
      >
        <SlideMenu
          category={category}
          categoryList={this.categoryList}
          onClick={this.handleCategory}
        />
        <BlackCurtain show={show} onShowModal={this.handleModal} />
        <SearchList show={show} onShowModal={this.handleModal} />
        <InfiniteScroll
          pageStart={0}
          loadMore={this.props.loadMore}
          hasMore={this.props.next !== null}
          loader={<Loader key={0} />}
          threshold={100}
        >
          <div className={cx("content")}>{items}</div>
        </InfiniteScroll>
      </Page>
    );
  }
}

export default withLoading(withModal(NewList));
