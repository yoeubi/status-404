import React, { Component } from 'react';
import SlideMenu from '../SliceMenu/SlideMenu';
import Header from '../Header';
import RestaurantItem from '../RestaurantItem';

class RestaurantList extends Component {

    state = {
        category : null
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
            category : menu
        })
    }
    render() {
        const {category} = this.state;
        return (
            <div key={category} ref={this.list}>
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