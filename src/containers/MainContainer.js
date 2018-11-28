import React, { Component } from 'react';
import {withUser} from '../context/UserContext';
import MainView from '../components/Main/MainView';
import Header from '../components/Main/Header';
import UserModal from '../components/Main/UserModal';
import AddressSearch from "../components/AddressSearch/AddressSearch";
import axios from 'axios';

const apiKey = '1173586d003c2973d03c551fc45e438f'; // 강산이꺼니까 막쓰지마샘

const api = axios.create();

api.interceptors.request.use(function(config) {
    if (apiKey) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = 'KakaoAK ' + apiKey;
    }
    return config;
});

class MainContainer extends Component {
    static defaultProps = {
        // user 정보, 유저 정보 없을시 null 로 기본값 설정
        user : null,
    }
    constructor(props){
        super(props);
        this.state = {
            // 모달 활성화 여부
            show: false,
            myposition: null,
            addressSearchShow: false
        }
    }
    async componentDidMount(){
        const {myposition} = this.state;
        // 로컬스토리지에 geolocation 이 있는지 확인한다.
        if(!localStorage.getItem('geo')){
            // 로컬스토리지에 geo 가 없으면 
            // 브라우저 지오로케이션에서 현재 좌표값 가져오기
            window.navigator.geolocation.getCurrentPosition( async (position) => {
                // 가져온 값을 스테이트에 저장하기
                await this.setState({
                    myposition: position.coords
                }); 
                // 가져온 값을 로컬스토리지에 저장하기
                localStorage.setItem('geo', JSON.stringify([position.coords]));
            });
        }
        
    }

    async componentDidUpdate(){
        if(this.state.myposition){
            const {data} = await api.get('https://dapi.kakao.com//v2/local/geo/coord2address.json',{
                params: {
                    x: this.state.myposition.longitude,
                    y: this.state.myposition.latitude,
                    input_coord: 'WGS84'
                }
            });
            console.log(data);
        }
    }


  handleUserModal = () => {
    console.log(this.state.show);
    this.setState({ show: !this.state.show });
  };

  handleAddressSearch = () => {
    console.log("address");
    this.setState({ addressSearchShow: !this.state.addressSearchShow });
  };

  render() {
    const { show, addressSearchShow } = this.state;
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
