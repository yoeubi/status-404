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
  render() {
    const {
      menu,
      onProductModal,
      onHandleBodyOnModal,
      selectedMenuOnModal,
      activeTab
    } = this.props;

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
                      onProductModal();
                      onHandleBodyOnModal("open");
                      selectedMenuOnModal(fs.pk);
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
