import React, { Component } from "react";

import AddressSearchView from "../components/AddressSearch/AddressSearchView";
import AddressSearchResult from "../components/AddressSearch/AddressSearchResult";
import api from "../api/kakaoAPI";
import { withUser } from "../context/UserContext";

class AddressSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "address-search",
      searchResult: [],
      userInput: "",
      recentAddress: []
    };

    // loading: false
  }

  handleUserInput = e => {
    const userInput = e.target.value;
    this.setState({
      userInput
    });
  };

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
          size: 15
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

  handleFinishBtn = id => {
    const { searchResult } = this.state;
    const index = searchResult.findIndex(item => item.id === id);
    this.state.recentAddress.push(searchResult[index]);
    this.setState({
      page: "address-search"
    });
  };

  render() {
    const { searchResult, userInput, recentAddress } = this.state;
    const { onAddressSearch, show, address } = this.props;
    return (
      <>
        {this.state.page === "address-search" ? (
          <AddressSearchView
            onUserInput={e => this.handleUserInput(e)}
            onSubmitBtn={() => this.handleSubmitBtn()}
            getAddress={this.getAddress}
            onAddressSearch={onAddressSearch}
            show={show}
            recentAddress={recentAddress}
            address={address}
            userInput={userInput}
          />
        ) : this.state.page === "address-search-result" ? (
          <AddressSearchResult
            searchResult={searchResult}
            userInput={userInput}
            onUserInput={e => this.handleUserInput(e)}
            onBackBtn={() => this.handleBackBtn()}
            onFinishBtn={e => this.handleFinishBtn(e)}
            recentAddress={recentAddress}
            getAddress={this.getAddress}
            address={address}
          />
        ) : null}
      </>
    );
  }
}

export default withUser(AddressSearchContainer);
