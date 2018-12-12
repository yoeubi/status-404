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
      return;
    }
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

  render() {
    const { userInput, searchList } = this.props;
    return (
      <div>
        <RestaurantSearch
          searchList={searchList}
          onSubmitBtn={() => this.handleSubmitBtn()}
          onUserInput={e => this.handleUserInput(e)}
          userInput={userInput}
        />
      </div>
    );
  }
}
