import React, { Component } from "react";

class MenuView extends Component {
  render() {
    const { title } = this.props;
    return <div>저는 {title} 입니다.</div>;
  }
}

export default MenuView;
