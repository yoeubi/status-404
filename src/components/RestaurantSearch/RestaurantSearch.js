import React, { Component } from "react";
import styles from "./RestaurantSearch.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
// svg
import { ReactComponent as MagnifyingGlass } from "../../img/search.svg";
import { ReactComponent as BackBtn } from "../../svg/arrow-left.svg";
const cx = classNames.bind(styles);

export default class RestaurantSearch extends Component {
  render() {
    const { userInput, onUserInput, onSubmitBtn, searchList } = this.props;
    return (
      <div className={cx("container")}>
        <div className={cx("InputContainer")}>
          <button className={cx("backBtn")}>
            <Link to={"/"}>
              <BackBtn />
            </Link>
          </button>
          <form
            className={cx("InputForm")}
            // onSubmit={onSubmitBtn}
          >
            <label>
              <input
                className={cx("Input")}
                autoComplete="off"
                placeholder="가게 이름으로 검색"
                type="search"
                value={userInput}
                onChange={onUserInput}
              />
            </label>
            <button
              className={cx("SubmitBtn")}
              onClick={onSubmitBtn}
              // type="submit"
              value="검색"
            >
              <MagnifyingGlass />
            </button>
          </form>
        </div>
        <div className={cx("HistoryContainer")}>
          <ul className={cx("HistoryList")}>
            {searchList &&
              searchList.map((s, index) => (
                <li key={index} className={cx("listItem")}>
                  {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
