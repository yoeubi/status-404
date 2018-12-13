import React, { Component } from 'react';
import CartList from '../components/CartList/CartList';
import { withUser } from '../context/UserContext';

class CartContainer extends Component {
    render() {
        return (
            <CartList {...this.props} />
        );
    }
}

export default withUser(CartContainer);