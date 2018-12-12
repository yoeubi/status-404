import React, { Component } from "react";
import OriginInfo from "./OriginInfo";
// react-collapsible
// DOC :: https://github.com/glennflanagan/react-collapsible#readme
import Collapsible from "react-collapsible";
// collapsible 라이브러리를 사용하기 위해 모듈을 적용하지 않음
import "./RestaurantMenu.scss";
import classNames from "classnames/bind";

import { ReactComponent as ArrowDown } from "../../img/chevron-down.svg";

class RestaurantMenu extends Component {
  static defaultProps = {};
  handleClick = pk => {
    // param  :::
    // pk : 선택한 메뉴 pk
    const {
      onProductModal,
      onHandleBodyOnModal,
      selectedMenuOnModal
    } = this.props;

    // 토큰확인 :: 로그인 여부 확인
    if (localStorage.getItem("token")) {
      // 로그인
      onProductModal();
      onHandleBodyOnModal("open");
      selectedMenuOnModal(pk);
    } else {
      // 미로그인
      alert("로그인이 필요한 서비스입니다.");
    }
  };
  render() {
    const { menu, activeTab } = this.props;

    return (
      <div className={classNames("MenuBody", { open: activeTab === "menu" })}>
        {menu &&
          menu.map((m, index) => (
            <Collapsible
              triggerTagName="div"
              trigger={
                <React.Fragment>
                  <span>{m.name}</span>
                  <ArrowDown className={classNames("arrow")} />
                </React.Fragment>
              }
              triggerWhenOpen={
                <React.Fragment>
                  <span>{m.name}</span>
                  <ArrowDown className={classNames("arrow")} />
                </React.Fragment>
              }
              key={index}
              // open={index === 0 ? true : false}
              open={true}
              easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
            >
              <ul>
                {m.food_set.map(fs => (
                  <li
                    onClick={() => {
                      this.handleClick(fs.pk);
                    }}
                    className={classNames("menuItem")}
                    key={fs.pk}
                  >
                    <span className={classNames("title")}>{fs.name}</span>{" "}
                    <br />
                    <span className={classNames("description")}>
                      {fs.food_info}
                    </span>
                    <br />
                    <span className={classNames("price")}>
                      {fs.price.toLocaleString()} 원
                    </span>
                  </li>
                ))}
              </ul>
            </Collapsible>
          ))}
        <OriginInfo />
      </div>
    );
  }
}

export default RestaurantMenu;
