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

const cx = classNames.bind(styles);

class NewList extends Component {
  state = {
    category: "",
    show: false,
    scroll: 0
  };
  categoryList = [
    "한식",
    "일식",
    "양식",
    "카페",
    "햄버거",
    "치킨",
    "피자",
    "중식",
    "분식"
  ];
  componentDidMount() {
    const { category, index } = this.parseQuery();
    this.setState({
      category,
      scroll: index * 50
    });
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      const { category, index } = this.parseQuery();
      this.setState({
        category,
        scroll: index * 50
      });
      window.scrollTo(0, 0);
    }
  }
  parseQuery = () => {
    const query = decodeURI(this.props.location.search);
    const parsed = new URLSearchParams(query);
    const idx = parsed.get("category");
    const category = this.categoryList.find(
      (category, index) => index === parseInt(idx)
    );
    return { category, index: idx };
  };
  handleScroll = scroll => {
    this.setState({
      scroll
    });
  };
  handleCategory = idx => {
    const { match, history } = this.props;
    const category = this.categoryList.find((category, index) => index === idx);
    history.push(`${match.path}?category=${idx}`);
    this.setState({
      category,
      show: false
    });
  };
  handleModal = () => {
    this.setState(prev => {
      this.props.onModal(prev.show ? "close" : "open");
      return { show: !prev.show };
    });
  };
  render() {
    const { category, scroll, show } = this.state;
    const { list } = this.props;
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
        <SlideMenu //   key={scroll}
          category={category}
          onChange={this.handleCategory}
          scroll={scroll}
          onScroll={this.handleScroll}
        />
        <BlackCurtain show={show} onShowModal={this.handleModal} />
        <SearchList show={show} onShowModal={this.handleModal} />
        <div className={cx("content")}>
          {list &&
            list.map(li => (
              <Link to={`/restaurant/${li.pk}/`} key={li.pk}>
                <RestaurantItem
                  name={li.name}
                  logo={
                    li.storeimage_set.length > 0
                      ? li.storeimage_set[0].location
                      : undefined
                  }
                />
              </Link>
            ))

          //   logo, title, star, review, comment, menu
          }
        </div>
      </Page>
    );
  }
}

export default withModal(NewList);
