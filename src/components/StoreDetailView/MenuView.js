import React, { Component } from "react";
import Collapsible from "react-collapsible";
import styles from "./MenuView.module.scss";
import "./MenuView.scss";
import classNames from "classnames/bind";

import { ReactComponent as ArrowDown } from "../../img/chevron-down.svg";

const cx = classNames.bind(styles);

class MenuView extends Component {
  static defaultProps = {
    menus: [
      {
        id: 0,
        category: "피자",
        list: [
          {
            id: 0,
            name: "페퍼로니",
            description: "설명 설명 설명충 이거슨 설명",
            price: 1000
          },
          {
            id: 1,
            name: "치즈피자",
            description: "설명 설명 설명충 이거슨 설명",
            price: 1000
          },
          {
            id: 2,
            name: "00피자",
            description: "설명 설명 설명충 이거슨 설명",
            price: 1000
          },
          {
            id: 3,
            name: "AA피자",
            description: "설명 설명 설명충 이거슨 설명",
            price: 1000
          }
        ]
      },
      {
        id: 1,
        category: "음료",
        list: [
          {
            id: 0,
            name: "콜라",
            description: "설명 설명 설명충 이거슨 설명",
            price: 1000
          },
          {
            id: 1,
            name: "사이다",
            description: "설명 설명 설명충 이거슨 설명",
            price: 1000
          },
          {
            id: 2,
            name: "스프라이트",
            description: "설명 설명 설명충 이거슨 설명",
            price: 1000
          },
          {
            id: 3,
            name: "딕터페퍼",
            description: "설명 설명 설명충 이거슨 설명",
            price: 1000
          }
        ]
      }
    ]
  };

  render() {
    const { title, menus } = this.props;
    const newMenus = menus.map(m => ({ ...m, active: false }));
    console.log(newMenus);
    return (
      <div className={cx("MenuBody")}>
        <div>저는 {title} 입니다.</div>
        {menus.map((m, index) => (
          <Collapsible
            triggerTagName="div"
            trigger={
              <React.Fragment>
                <span>{m.category}</span>{" "}
                <ArrowDown className={classNames("arrow")} />
              </React.Fragment>
            }
            triggerWhenOpen={
              <React.Fragment>
                <span>{m.category}</span>{" "}
                <ArrowDown className={classNames("arrow")} />
              </React.Fragment>
            }
            key={m.id}
            // open={index === 0 ? true : false}
            open={true}
            easing="cubic-bezier(0.215, 0.61, 0.355, 1)"
          >
            <ul>
              {m.list.map(l => (
                <li className={classNames("menuItem")} key={l.id}>
                  <span className={classNames("title")}>{l.name}</span> <br />
                  <span className={classNames("description")}>
                    {l.description}
                  </span>{" "}
                  <br />
                  <span className={classNames("price")}>
                    {l.price.toLocaleString()} 원
                  </span>
                </li>
              ))}
            </ul>
          </Collapsible>
        ))}
      </div>
    );
  }
}

export default MenuView;
