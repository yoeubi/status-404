import React, { Component } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Login extends Component {
    state = {
        show : false
    }
    handleClick = () => {
        console.log('실행중');
        
        this.setState({show: !this.state.show})
    }
    render() {
        const show = this.state.show;
        return (
            <div className={cx('background')}>
                <div className={cx('modal',{show})}>
                    <div className={cx('header')}>
                        <div>유저 이미지</div>
                        <div>
                            <p>고마운 분</p>
                            <p>deceiver22</p>
                            <p>0p</p>
                        </div>
                    </div>
                    <div>
                        <ul className={cx('nav')}>
                            <li className={cx('item')}>포인트</li>
                            <li className={cx('item')}>쿠폰함</li>
                            <li className={cx('item')}>장바구니</li>
                            <li className={cx('item')}>바로결제내역</li>
                            <li className={cx('item')}>단골매장</li>
                            <li className={cx('item')}>리뷰관리</li>
                        </ul>
                    </div>
                    <div className={cx('banner')}>
                    </div>
                    <div>
                        <ul className={cx('menu')}>
                            <li className={cx('item')}>공지사항</li>
                            <li className={cx('item')}>이벤트</li>
                            <li className={cx('item')}>광고문의</li>
                            <li className={cx('item')}>1:1 문의하기</li>
                            <li className={cx('item')}>환경설정</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            <span>배달의민족 콜센터</span>
                            <span>1644-0025</span>
                            <span>(24시간 운영, 연중무휴)</span>
                        </p>
                        <p className={cx('footer')}>
                            <span>Copyright Status 404 in Fastcampus. All Rights Reserved.</span>
                            <span>Version 8.9.1</span>
                        </p>
                    </div>
                </div>
                <button onClick={this.handleClick}>클릭</button>
            </div>
        );
    }
}

export default Login;   