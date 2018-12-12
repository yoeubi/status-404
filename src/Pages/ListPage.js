import React from 'react';
import RestaurantList from '../components/RestaurantList/RestaurantList';

const ListPage = (props) => {
    return (
        <RestaurantList {...props} />
    );
};

export default ListPage;