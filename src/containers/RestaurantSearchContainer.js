import React, { Component } from "react";
import RestaurantSearch from "../components/RestaurantSearch/RestaurantSearch";

export default class RestaurantSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      searchList: []
    };
  }

  componentDidMount() {
    const searchList = JSON.parse(localStorage.getItem("searchList"));
    if (searchList) {
      this.setState({
        searchList
      });
    } else {
      localStorage.setItem("searchList", JSON.stringify(this.state.searchList));
    }
    console.log(searchList);
  }
  // 사용자의 맛집 검색 키워드를 상태로 저장하는 함수
  handleUserInput = e => {
    const userInput = e.target.value;
    this.setState({
      userInput
    });
  };
  // 입력된 맛집 검색 키워드를 다루는 함수
  handleSubmitBtn = () => {
    const { userInput } = this.state;
    // 상태에 있는 검색 키워드 목록에 사용자 입력을 저장
    this.state.searchList.push(userInput);
    // local storage에 키워드를 저장
    localStorage.setItem("searchList", JSON.stringify(this.state.searchList));
  };
  // 삭제 버튼으로 검색 키워드 history 목록에 있는 item을 지우는 함수
  handleDeleteBtn = index => {
    this.state.searchList.splice(index, 1);
    localStorage.removeItem("searchList");
    localStorage.setItem("searchList", JSON.stringify(this.state.searchList));
    this.setState({});
  };

  render() {
    const { userInput, searchList } = this.state;
    return (
      <div>
        <RestaurantSearch
          searchList={searchList}
          onSubmitBtn={() => this.handleSubmitBtn()}
          onUserInput={e => this.handleUserInput(e)}
          userInput={userInput}
          onDeleteBtn={index => this.handleDeleteBtn(index)}
        />
      </div>
    );
  }
}
