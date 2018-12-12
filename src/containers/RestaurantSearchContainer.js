import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RestaurantSearch from "../components/RestaurantSearch/RestaurantSearch";
import api from "../api/mainAPI";

class RestaurantSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      searchList: [],
      searchResult: false,
      store: []
    };
  }

  async componentDidMount() {
    // const { location } = this.props;
    // console.log(location.search);
    // const p = new URLSearchParams(location.search); // URLSearchParams: key value 스토어(저장소)
    // const category = p.get("category");
    const { category } = this.props;
    const { data: store } = await api.get("/store/list", {
      params: {
        category
      }
    });
    const searchList = JSON.parse(localStorage.getItem("searchList"));
    if (searchList) {
      this.setState({
        searchList,
        store
      });
    } else {
      localStorage.setItem("searchList", JSON.stringify(this.state.searchList));
      this.setState({
        store
      });
    }
    // console.log(searchList);
  }

  // 사용자의 맛집 검색 키워드를 상태로 저장하는 함수
  handleUserInput = e => {
    const userInput = e.target.value;
    this.setState({
      userInput
    });
  };
  // 입력된 맛집 검색 키워드를 다루는 함수
  handleSubmitBtn = e => {
    e.preventDefault();
    const { userInput } = this.state;
    // 상태에 있는 검색 키워드 목록에 사용자 입력을 저장
    this.state.searchList.push(userInput);
    // local storage에 키워드를 저장
    localStorage.setItem("searchList", JSON.stringify(this.state.searchList));
    this.setState(prevState => ({
      searchResult: !prevState.searchResult
    }));
  };
  // 삭제 버튼으로 검색 키워드 history 목록에 있는 item을 지우는 함수
  handleDeleteBtn = index => {
    this.state.searchList.splice(index, 1);
    localStorage.removeItem("searchList");
    localStorage.setItem("searchList", JSON.stringify(this.state.searchList));
    this.setState({});
  };
  // 맛집 검색 페이지 안의 검색 결과 목록을 바꾸는 함수
  handleSearchResult = () => {
    this.setState(prevState => ({
      searchResult: !prevState.searchResult
    }));
  };

  render() {
    const { userInput, searchList, searchResult, store } = this.state;
    const { location } = this.props;
    console.log(location.search);
    const p = new URLSearchParams(location.search); // URLSearchParams: key value 스토어(저장소)
    const category = p.get("category");
    console.log(store);
    const storeList = store.map(s => ({
      name: s.name,
      id: s.pk,
      storeImgURL: s.storeimage_set[0]
    }));
    console.log(storeList);

    return (
      <div>
        <RestaurantSearch
          searchResult={searchResult}
          searchList={searchList}
          onSubmitBtn={this.handleSubmitBtn}
          onUserInput={e => this.handleUserInput(e)}
          userInput={userInput}
          onDeleteBtn={index => this.handleDeleteBtn(index)}
          onList={this.handleList}
          onSearchResult={() => this.handleSearchResult()}
          key={category}
          category={p.get("category")}
          storeList={storeList}
        />
      </div>
    );
  }
}

export default withRouter(RestaurantSearchContainer);
