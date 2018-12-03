import React, { Component } from "react";
import RestaurantDetailView from "../components/StoreDetailView/RestaurantDetailView";

class RestaurantDetailPage extends Component {
  render() {
    return <RestaurantDetailView {...this.props} />;
  }
}

export default RestaurantDetailPage;
