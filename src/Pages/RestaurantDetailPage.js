import React, { Component } from "react";
import RestaurantDetail from "../containers/RestaurantDetail";

class RestaurantDetailPage extends Component {
  render() {
    return <RestaurantDetail {...this.props} />;
  }
}

export default RestaurantDetailPage;
