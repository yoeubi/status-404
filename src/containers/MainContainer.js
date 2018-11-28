import React, { Component } from 'react';
import {withUser} from '../context/UserContext';
import MainView from '../components/Main/MainView';
import Header from '../components/Common/Header';
import UserModal from '../components/Common/UserModal';

class MainContainer extends Component {
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
        const {show} = this.state;
        const {user} = this.props; // <=== UserContext 에 작성된 상태가 props로 전달됩니다.
        return (
            <React.Fragment>
            <UserModal 
                user={user}
                onUserModal={this.handleUserModal} showModal={show}
            />
            <Header 
                user={user}
                onUserModal={this.handleUserModal}
            />
            <MainView/>
            </React.Fragment>
        );
    }
}

export default withUser(MainContainer);