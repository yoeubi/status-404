import React, { Component } from 'react';
import SlideMenu from '../SlideMenu';
import Header from '../Header';
import RestaurantItem from '../RestaurantItem';
import SearchList from '../SearchList';
import BlackCurtain from '../BlackCurtain';
import styles from './RestaurantList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class RestaurantList extends Component {

    state = {
        category : null,
        show : false,
        scroll : 0,
    }
    list = React.createRef();
    categoryList = [
        '한식','일식','양식', '카페','햄버거','치킨','피자','중식','분식'
    ]

    componentDidMount() {
        const category = this.parseQuery();
        this.setState({
            category
        });
        window.scrollTo(0,0);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.props.location !== prevProps.location){
            const category = this.parseQuery();
            this.setState({
                category
            });
            window.scrollTo(0, 0);
        }
    }
    parseQuery = () => {
        const query = decodeURI(this.props.location.search);
        const parsed = new URLSearchParams(query);
        const idx = parsed.get("category");
        const category = this.categoryList.find( ( category , index ) => index === parseInt(idx));
        return category;
    }
    
    handleCategory = idx => {
        const { match, history } = this.props;
        const category = this.categoryList.find( (category, index) => index === idx );
        history.push(`${match.path}?category=${idx}`);
        this.setState({
            category,
            show : false
        })
    }
    handleShowModal = () => {
        this.setState({
            show : !this.state.show
        })
    }
    handleScroll = scroll => {
        this.setState({
            scroll
        })
    }
    render() {
        const {category, show , scroll} = this.state;
        return <div key={category} ref={this.list} className={cx('restaurant-list', {show})}>
            <Header category={category} onShowModal={this.handleShowModal} />
            <SlideMenu category={category} onChange={this.handleCategory} scroll={scroll} onScroll={this.handleScroll} />
            <SearchList show={show} />
            <BlackCurtain show={show} onShowModal={this.handleShowModal} />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
          </div>;
    }
}

export default RestaurantList;