import React, { Component } from "react";
import { withUser } from "../context/UserContext";
import MainView from "../components/Main/MainView";
import Header from "../components/Main/Header";
import UserModal from "../components/Main/UserModal";
import AddressSearchView from "../components/AddressSearch/AddressSearchView";
import axios from "axios";

const apiKey = "1173586d003c2973d03c551fc45e438f"; // 강산이꺼니까 막쓰지마샘

const api = axios.create(); // 여기서만 쓸 api config를 정의하기 위해

// 이 컴포넌트에서만 쓸 api config 정의
api.interceptors.request.use(function(config) {
  if (apiKey) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = "KakaoAK " + apiKey;
  }
  return config;
});

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
      addressSearchShow: false,
      searchResult: []
    };
  }
  async componentDidMount() {
    // 최초 접속시 로컬스토리지에 geolocation 이 있는지 확인한다.
    if (!localStorage.getItem("currentAddress")) {
      // 로컬스토리지에 currentAddress 가 없으면
      window.navigator.geolocation.getCurrentPosition(async position => {
        // 브라우저 지오로케이션에서 현재 좌표값 가져오기
        console.log({
          x: position.coords.longitude,
          y: position.coords.latitude
        });
        // 가져온 좌표값으로 api 요청
        const { data } = await api.get(
          "https://dapi.kakao.com//v2/local/geo/coord2address.json",
          {
            params: {
              // 파라미터 정보 확인 https://developers.kakao.com/docs/restapi/local#%EC%A3%BC%EC%86%8C-%EB%B3%80%ED%99%98
              x: position.coords.longitude,
              y: position.coords.latitude,
              input_coord: "WGS84"
            }
          }
        );

        const currentAddress = JSON.stringify(data.documents[0].address); // 갹체라서 JSON 으로 변환
        // 로컬스토리지에 가져온 정보 저장
        localStorage.setItem("currentAddress", currentAddress);
        // UserContext 상태에 저장
        this.props.handleAddress(JSON.parse(currentAddress));
      });
    } else {
      // 로컬스토리지에 currentAddress 가 있다면 api 요청 하지 않고 로컬스트리지 값을 현재 유저 상태에 저장
      const currentAddress = JSON.parse(localStorage.getItem("currentAddress")); // 객체형태의 로컬스트리지 저장값을 가져오기 위해 parse
      this.props.handleAddress(currentAddress);
    }
  }

  handleUserModal = () => {
    this.setState({ show: !this.state.show });
  };

  handleAddressSearch = () => {
    this.setState({ addressSearchShow: !this.state.addressSearchShow });
  };

  getAddress = async userInput => {
    const { data } = await api.get(
      "https://dapi.kakao.com//v2/local/search/address.json",
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

  render() {
    const { show, addressSearchShow, searchResult } = this.state;
    const { user } = this.props; // <=== UserContext 에 작성된 상태가 props로 전달됩니다.
    return (
      <React.Fragment>
        <UserModal
          user={user}
          onUserModal={this.handleUserModal}
          showModal={show}
        />
        <Header
          user={user}
          onUserModal={this.handleUserModal}
          onAddressSearch={this.handleAddressSearch}
        />
        <AddressSearchView
          show={addressSearchShow}
          onAddressSearch={this.handleAddressSearch}
          getAddress={this.getAddress}
          searchResult={searchResult}
        />
        <MainView />
      </React.Fragment>
    );
  }
}

export default withUser(MainContainer);
