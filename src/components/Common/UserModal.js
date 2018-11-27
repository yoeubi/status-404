import React, { Component } from 'react';
import styles from './UserModal.module.scss';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";

import {ReactComponent as Avater } from '../../img/mark-github.svg';

const cx = classNames.bind(styles);

class UserModal extends Component {
  static defaultProps = {
    navList: [
      {
        id:0,
        title: '포인트',
        img:<Avater/>
      },
      {
        id:1,
        title: '쿠폰함',
        img:<Avater/>
      },
      {
        id:2,
        title: '장바구니',
        img:<Avater/>
      },
      {
        id:3,
        title: '바로결제내역',
        img:<Avater/>
      },
      {
        id:4,
        title: '단골매장',
        img:<Avater/>
      },
      {
        id:5,
        title: '리뷰관리',
        img:<Avater/>
      },
    ]
  }
  
  render() {
    const {showModal,onUserModal,navList} = this.props;
    // FIXME :: 모달 활성화시 Layout 에스크롤이 생기지 않게 하기 위해 css 트릭을 적용하였으나
    //          활성화시 어떤 위치에서도 최상단으로 이동하는 버그가 있어서 해결해야 함
    return (
      <div 
      onClick={onUserModal}
      className={cx("background",{ "show": showModal })}>

      <div onClick={e => {
        // 클릭 이벤트시 background 엘리먼트까지 이벤트가 전달되면
        // onUserModal 이 실행되기 때문에 이벤트를 막아놓았다.
        e.stopPropagation();
      }} className={cx("modal")}>
        <div className={cx("header")}>
          <Avater className={cx("avartar")}></Avater>
          <Link 
            // click 시 profile 페이지 렌더링과 동시에 모달이 사라지도록
            // 일단 사라지도록 해놓았으나 기획에 따라 유지할수 있음
            onClick={onUserModal}
            to="/profile"
            className={cx("user")}>
            <p className={cx("colored")}>고마운 분</p>
            <p className={cx("username")}>이강산</p>
            <p className={cx("point","colored")}>0p</p>
          </Link>
        </div>
        <div>
          <ul className={cx("nav")}>
          {
            navList.map(n=>(
              <li key={n.id} className={cx("item")}>
                {n.img}
                {n.title}
              </li>
            ))
          }
          </ul>
        </div>
        <div className={cx("banner")}>
          banner
        </div>
        <div>
          <ul className={cx("menu")}>
            <li className={cx("item")}>
            공지사항</li>
            <li className={cx("item")}>
            이벤트</li>
            <li className={cx("item")}>
            광고문의</li>
            <li className={cx("item")}>
            1:1 문의하기</li>
            <li className={cx("item")}>
            환경설정</li>
          </ul>
        </div>
        <div className={cx("footer")}>
          <p>
            <span>배달의민족 콜센터</span>
            <span>1644-0025</span>
            <span>(24시간 운영, 연중무휴)</span>
          </p>
          <p>
            <span>
              Copyright Status 404 in Fastcampus. All Rights
              Reserved.
                  </span>
            <span>Version 8.9.1</span>
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default UserModal;   