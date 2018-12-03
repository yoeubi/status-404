import React, { Component } from "react";

import AddressSearchView from "../components/AddressSearch/AddressSearchView";
import AddressSearchResult from "../components/AddressSearch/AddressSearchResult";
import api from "../api/kakaoAPI";

export default class AddressSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { page: "address-search", searchResult: [] };

    // loading: false
  }

  handleSubmitBtn = () => {
    this.setState({
      page: "address-search-result"
    });
  };

  getAddress = async userInput => {
    const { data } = await api.get(
      // 1. 주소로 검색
      // "https://dapi.kakao.com/v2/local/search/address.json",
      // 2. 키워드(지번, 도로명, 건물명)로 검색, 설정값: 전국 단위(기준이되는 위치 설정은 아직 미구현)
      "https://dapi.kakao.com/v2/local/search/keyword.json",
      {
        params: {
          query: userInput,
          size: 10
        }
      }
    );
    const searchResult = data.documents;
    this.setState({
      searchResult
    });
  };

  handleBackBtn = () => {
    this.setState({
      page: "address-search"
    });
  };

  render() {
    const { searchResult } = this.state;
    const { onAddressSearch, show } = this.props;
    return (
      <>
        {this.state.page === "address-search" ? (
          <AddressSearchView
            onUserInput={e => this.handleUserInput(e)}
            onSubmitBtn={() => this.handleSubmitBtn()}
            getAddress={this.getAddress}
            searchResult={searchResult}
            onAddressSearch={onAddressSearch}
            show={show}
          />
        ) : this.state.page === "address-search-result" ? (
          <AddressSearchResult onBackBtn={() => this.handleBackBtn()} />
        ) : null}
      </>
    );
  }
}
