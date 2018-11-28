import React, { Component } from 'react';
import Header from './Header';
import UserModal from './UserModal';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import {withUser} from '../../context/UserContext';
const cx = classNames.bind(styles);

// 공통 레이아웃이에여
// Header 컴포넌트를 잘 작성해서 페이지마다 다르게 렌더링 될 수 있도록 해봅시당.
class Layout extends Component {
    static defaultProps = {
        // user 정보, 유저 정보 없을시 null 로 기본값 설정
        user : null,
    }
    constructor(props){
        super(props);
        this.state = {
            // 모달 활성화 여부
            show: false,
        }
    }

    handleUserModal = () => {
        console.log('실행중');
        this.setState({ show: !this.state.show })
    }

    render() {
        const {show, isLogin} = this.state;
        const {user} = this.props;
        return (
            <div className={cx('layout',{'noScroll': show })}>
                <UserModal 
                user={user}
                isLogin={isLogin}
                onUserModal={this.handleUserModal} showModal={show}
                />
                <Header 
                user={user}
                isLogin={isLogin}
                onUserModal={this.handleUserModal}
                />
                {this.props.children}
            </div>
        );
    }
}

export default withUser(Layout);