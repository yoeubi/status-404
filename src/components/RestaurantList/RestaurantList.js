import React, { Component } from 'react';
import styles from './RestaurantList.module.scss';
import classNames from 'classnames/bind';
import SlideMenu from '../SliceMenu/SlideMenu';
import Header from '../Header';
import RestaurantItem from '../RestaurantItem';

const cx = classNames.bind(styles);

class RestaurantList extends Component {

    state = {
        category : null
    }

    componentDidMount() {
        const query = decodeURI(this.props.location.search);
        const parsed = new URLSearchParams(query);
        const category = parsed.get("category");
        this.setState({
            category
        })
    }
    
    handleCategory = menu => {
        const { match, history } = this.props;
        history.push(`${match.path}?category=${menu}`);
        this.setState({
            category : menu
        })
    }
    render() {
        const {category} = this.state;
        return (
            <div key={category}>
                <Header category={category} />
                <SlideMenu category={category} onChange={this.handleCategory} />
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>
            </div>
        );
    }
}

export default RestaurantList;