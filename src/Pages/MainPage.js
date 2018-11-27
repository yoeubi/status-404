import React, { Component } from 'react';
import Layout from '../components/Common/Layout';
import Main from '../containers/Main';

class MainPage extends Component {
    // MainPage :: 라우터와 연결되어야 하는 컴포넌트
    // 레이아웃 컴포넌트 등과 연결
    render() {
        return (
            <Layout>
                <Main />
            </Layout>
        );
    }
}

export default MainPage;