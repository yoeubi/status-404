import React, { Component } from "react";
import StoreDetailView from "../components/StoreDetailView/StoreDetailView";

class StoreDetailPage extends Component {
  render() {
    return <StoreDetailView {...this.props} />;
  }
}

export default StoreDetailPage;
