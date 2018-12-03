import React, { Component } from 'react';
import styles from './RestaurantList.module.scss';
import classNames from 'classnames/bind';
import SlideMenu from '../SliceMenu/SlideMenu';
import Header from '../Header';
import RestaurantItem from '../RestaurantItem';

const cx = classNames.bind(styles);

class RestaurantList extends Component {
    render() {
        return (
            <div>
                <Header />
                <SlideMenu />
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