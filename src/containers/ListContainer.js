import React, { Component } from 'react';
import NewList from '../components/NewList/NewList';
import {mainAPI} from '../api';

class ListContainer extends Component {
    state = {
        list : null
    }
    async componentDidMount() {
        try {
            const {data} = await mainAPI.get('/store/list/');
            console.log(data);
            this.setState({
                list : data
            })
        } catch(e){
            console.log('스토어 리스트 에러')
        }
    }
    
    render() {
        const {list} = this.state;
        return (
            <NewList {...this.props} list={list} />
        );
    }
}

export default ListContainer;