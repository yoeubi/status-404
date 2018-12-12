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
    this.setState({
      searchList
    });
    console.log(searchList);
  }

  handleUserInput = e => {
    const userInput = e.target.value;
    this.setState({
      userInput
    });
  };

  handleSubmitBtn = () => {
    const { userInput } = this.state;
    this.state.searchList.push(userInput);
    localStorage.setItem("searchList", JSON.stringify(this.state.searchList));
  };

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
