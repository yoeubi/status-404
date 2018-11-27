import React, { Component } from 'react';
import Header from './Header';
import UserModal from './UserModal';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 공통 레이아웃이에여
// Header 컴포넌트를 잘 작성해서 페이지마다 다르게 렌더링 될 수 있도록 해봅시당.
class Layout extends Component {
    state = {
        show: false
      }
    handleUserModal = () => {
        console.log('실행중');

        this.setState({ show: !this.state.show })
    }

    render() {
        const {show} = this.state;
        return (
            <div className={cx('layout',{'noScroll': show })}>
                <UserModal onUserModal={this.handleUserModal} showModal={show}/>
                <Header onUserModal={this.handleUserModal}/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;