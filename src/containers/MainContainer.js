import React, { Component } from "react";
import { withUser } from "../context/UserContext";
import MainView from "../components/Main/MainView";
import Header from "../components/Main/Header";
import UserModal from "../components/Main/UserModal";
// import AddressSearchView from "../components/AddressSearch/AddressSearchView";
import AddressSearchContainer from "./AddressSearchContainer";

class MainContainer extends Component {
  static defaultProps = {
    // user 정보, 유저 정보 없을시 null 로 기본값 설정
    user: null
  };
  constructor(props) {
    super(props);
    this.state = {
      // 모달 활성화 여부
      show: false,
      addressSearchShow: false
    };
  }

  handleUserModal = () => {
    this.setState({ show: !this.state.show });
  };

  handleAddressSearch = () => {
    this.setState({ addressSearchShow: !this.state.addressSearchShow });
  };

  // getAddress = async userInput => {
  //   const { data } = await api.get(
  //     // 1. 주소로 검색
  //     // "https://dapi.kakao.com/v2/local/search/address.json",
  //     // 2. 키워드(지번, 도로명, 건물명)로 검색, 설정값: 전국 단위(기준이되는 위치 설정은 아직 미구현)
  //     "https://dapi.kakao.com/v2/local/search/keyword.json",
  //     {
  //       params: {
  //         query: userInput,
  //         size: 10
  //       }
  //     }
  //   );
  //   const searchResult = data.documents;
  //   this.setState({
  //     searchResult
  //   });
  // };

  render() {
    const { show, addressSearchShow } = this.state;
    const { user, address } = this.props; // <=== UserContext 에 작성된 상태가 props로 전달됩니다.
    return (
      <React.Fragment>
        <UserModal
          user={user}
          onUserModal={this.handleUserModal}
          showModal={show}
        />
        <Header
          address={address}
          onUserModal={this.handleUserModal}
          onAddressSearch={this.handleAddressSearch}
        />
        <AddressSearchContainer
          show={addressSearchShow}
          onAddressSearch={this.handleAddressSearch}
        />
        <MainView />
      </React.Fragment>
    );
  }
}

export default withUser(MainContainer);
