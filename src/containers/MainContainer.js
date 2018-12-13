import React, { Component } from "react";
import { withUser } from "../context/UserContext";
import { UiProvider } from "../context/UiContext";
import MainView from "../components/Main/MainView";
import Header from "../components/Main/Header";
import UserModal from "../components/Main/UserModal";
// import AddressSearchView from "../components/AddressSearch/AddressSearchView";
import AddressSearchContainer from "./AddressSearchContainer";
import mainAPI from "../api/mainAPI";

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
      // 주소 검색 모달 활성화 여부
      addressSearchShow: false,
      loading: true,
      numberOfCartItem: null
    };
  }

  async componentDidMount() {
    // 메인 페이지에서 받아올 api 작성할 부분 ↓↓↓↓↓↓↓

    if (localStorage.getItem("token")) {
      // 로그인시 로직 ↓↓↓↓↓↓↓
      // 카트정보 받아오기
      const { data: cartData } = await mainAPI.get(`/cart/items/`);
      console.log(cartData.item.length);

      this.setState({
        numberOfCartItem: cartData.item.length,
        loading: false
      });
    } else {
      // 미 로그인시 로직 ↓↓↓↓↓↓↓
      this.setState({
        loading: false
      });
    }
  }

  handleUserModal = () => {
    this.setState({ show: !this.state.show });
  };
  // 주소 검색 모달 활성화 handle function
  handleAddressSearch = () => {
    this.setState({ addressSearchShow: !this.state.addressSearchShow });
  };

  render() {
    const { show, addressSearchShow, loading, numberOfCartItem } = this.state;
    const { user, address } = this.props; // <=== UserContext 에 작성된 상태가 props로 전달됩니다.
    return (
      <React.Fragment>
        <UiProvider>
          <UserModal
            user={user}
            numberOfCartItem={numberOfCartItem}
            onUserModal={this.handleUserModal}
            showModal={show}
          />
          <Header
            user={user}
            address={address}
            onUserModal={this.handleUserModal}
            onAddressSearch={this.handleAddressSearch}
          />
        </UiProvider>
        <AddressSearchContainer
          show={addressSearchShow}
          onAddressSearch={this.handleAddressSearch}
          address={address}
        />
        <MainView loading={loading} />
      </React.Fragment>
    );
  }
}

export default withUser(MainContainer);
