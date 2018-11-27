import React, { Component } from 'react';
import MainView from '../components/Main/MainView';

class Main extends Component {
    // Main :: 통신을 담당하는 컨테이너 컴포넌트
    // Context Cousumer 와 연결되어야 함 
    // 상태를 가질수 있음
    render() {
        return (
            <MainView/>
        );
    }
}

export default Main;