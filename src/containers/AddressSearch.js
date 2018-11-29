import React, { Component } from "react";

import AddressSearchView from "../components/AddressSearch/AddressSearchView";

export default class AddressSearch extends Component {
  static defaultProps = {
    recentAddressList: [
      {
        id: 0,
        address: "성동구 성수동2가 277-17 제강빌딩",
        road: "성수이로 118 제강빌딩"
      },
      {
        id: 1,
        address: "성동구 성수동2가 277-54 서브웨이",
        road: "아차산로 121 서브웨이"
      },
      {
        id: 2,
        address: "성동구 성수동2가 300-1 성수역[2호선]",
        road: "아차산로 113"
      }
    ]
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { recentAddressList } = this.props;
    return <AddressSearchView recentAddressList={recentAddressList} />;
  }
}
