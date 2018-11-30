import React, { Component } from 'react';
import {withUser} from '../context/UserContext';
import MainView from '../components/Main/MainView';
import Header from '../components/Main/Header';
import UserModal from '../components/Main/UserModal';
import AddressSearch from "../components/AddressSearch/AddressSearch";

class MainContainer extends Component {
    static defaultProps = {
        // user 정보, 유저 정보 없을시 null 로 기본값 설정
        user : null,
    }
    state = {
        // 모달 활성화 여부
        show: false,
        addressSearchShow: false
    }
    async componentDidMount(){
        // 최초 접속시 로컬스토리지에 geolocation 이 있는지 확인한다.
        if(!localStorage.getItem('currentAddress')){
            // 로컬스토리지에 currentAddress 가 없으면 
            window.navigator.geolocation.getCurrentPosition( async (position) => {
                // 브라우저 지오로케이션에서 현재 좌표값 가져오기
                // 가져온 좌표값으로 api 요청
                const {data} = await api.get('https://dapi.kakao.com//v2/local/geo/coord2address.json',{
                    params: {
                        // 파라미터 정보 확인 https://developers.kakao.com/docs/restapi/local#%EC%A3%BC%EC%86%8C-%EB%B3%80%ED%99%98
                        x: position.coords.longitude,
                        y: position.coords.latitude,
                        input_coord: 'WGS84'
                    }
                });
                
                const currentAddress = JSON.stringify(data.documents[0].address); // 갹체라서 JSON 으로 변환
                // 로컬스토리지에 가져온 정보 저장
                localStorage.setItem('currentAddress', currentAddress);
                // UserContext 상태에 저장
                this.props.handleAddress(JSON.parse(currentAddress));
            });
        }
    }


  handleUserModal = () => {
    this.setState({ show: !this.state.show });
  };

  handleAddressSearch = () => {
    this.setState({ addressSearchShow: !this.state.addressSearchShow });
  };

  render() {
    const { show, addressSearchShow } = this.state;
    const { user } = this.props; // <=== UserContext 에 작성된 상태가 props로 전달됩니다.
    console.log('maincontainer - user',user);
    
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
        <AddressSearch
          show={addressSearchShow}
          onAddressSearch={this.handleAddressSearch}
        />
        <MainView />
      </React.Fragment>
    );
  }
}

export default withUser(MainContainer);
