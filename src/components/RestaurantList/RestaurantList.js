import React, { Component } from 'react';
import SlideMenu from '../SlideMenu';
import Header from '../Header';
import RestaurantItem from '../RestaurantItem';
import SearchList from '../SearchList';
import BlackCurtain from '../BlackCurtain';

class RestaurantList extends Component {

    state = {
        category : null,
        show : false
    }
    list = React.createRef();

    componentDidMount() {
        const query = decodeURI(this.props.location.search);
        const parsed = new URLSearchParams(query);
        const category = parsed.get("category");
        this.setState({
            category
        });
        window.scrollTo(0,0);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.props.location !== prevProps.location){
            const query = decodeURI(this.props.location.search);
            const parsed = new URLSearchParams(query);
            const category = parsed.get("category");
            this.setState({
                category
            });
            window.scrollTo(0, 0);
        }
    }
    
    handleCategory = menu => {
        const { match, history } = this.props;
        history.push(`${match.path}?category=${menu}`);
        this.setState({
            category : menu,
            show : false
        })
    }
    handleShowModal = () => {
        this.setState({
            show : !this.state.show
        })
    }
    render() {
        const {category, show} = this.state;
        return <div key={category} ref={this.list} style={{ position: "relative" }}>
            <Header category={category} onShowModal={this.handleShowModal} />
            <SlideMenu category={category} onChange={this.handleCategory} />
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