import React, { Component } from "react";
import RestaurantDetailView from "../components/RestaurantDetail/RestaurantDetailView";

class RestaurantDetailPage extends Component {
  render() {
    return <RestaurantDetailView {...this.props} />;
  }
}

export default RestaurantDetailPage;
