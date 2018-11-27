import React, { Component } from 'react';
import styles from './UserModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class UserModal extends Component {
  static defaultProps = {
    navList: [
      {
        id:0,
        title: '포인트',
        img:null
      },
      {
        id:1,
        title: '쿠폰함',
        img:null
      },
      {
        id:2,
        title: '장바구니',
        img:null
      },
      {
        id:3,
        title: '바로결제내역',
        img:null
      },
      {
        id:4,
        title: '단골매장',
        img:null
      },
      {
        id:5,
        title: '리뷰관리',
        img:null
      },
    ]
  }
  
  render() {
    const {showModal,onUserModal,navList} = this.props;
    return <div className={cx("background",{ "show": showModal })}>
      <div className={cx("modal", { "show": showModal })}>
        <div className={cx("header")}>
          <div className={cx("avartar")}>avartar</div>
          <div className={cx("user")}>
            <p className={cx("colored")}>고마운 분</p>
            <p className={cx("username")}>이강산</p>
            <p className={cx("point","colored")}>0p</p>
          </div>
          <button className={cx("close")} onClick={onUserModal}>닫기</button>
        </div>
        <div>
          <ul className={cx("nav")}>
          {
            navList.map(n=>(
              <li key={n.id} className={cx("item")}>
                {n.title}
              </li>
            ))
          }
          </ul>
        </div>
        <div className={cx("banner")} />
        <div>
          <ul className={cx("menu")}>
            <li className={cx("item")}><a href="#">공지사항</a></li>
            <li className={cx("item")}><a href="#">이벤트</a></li>
            <li className={cx("item")}><a href="#">광고문의</a></li>
            <li className={cx("item")}><a href="#">1:1 문의하기</a></li>
            <li className={cx("item")}><a href="#">환경설정</a></li>
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
    </div>;
  }
}

export default UserModal;   