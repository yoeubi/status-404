import React, { Component } from "react";
import styles from "./AddressSetting.module.scss";
import classNames from "classnames/bind";
//svg
import { ReactComponent as Crosshair } from "../../img/crosshair.svg";

const cx = classNames.bind(styles);
const daum = window.daum;

export default class AddressSetting extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.centerAddrRef = React.createRef();

    this.state = {
      addressType: true,
      // roadAddress: null,
      // address: null,
      refresh: null,
      content: null
    };
  }

  componentDidMount() {
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          this.map(latitude, longitude);
        }
      );
    } else {
      alert("geolocation을 사용할 수 없습니다.");
    }
  }

  map = (latitude, longitude) => {
    // const getRoadAddr = this.getRoadAddr;
    // const getAddr = this.getAddr;
    var infoDiv = this.centerAddrRef.current;
    var mapContainer = this.mapRef.current, // 지도를 표시할 div
      mapOption = {
        center: new daum.maps.LatLng(latitude, longitude), // 지도의 중심좌표 (사용자의 위치: 사용자로 geolocation으로 부터 받은 위도, 경도)
        level: 2 // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new daum.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new daum.maps.services.Geocoder();

    var marker = new daum.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
      infowindow = new daum.maps.InfoWindow({
        zindex: 1
      }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

    // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    daum.maps.event.addListener(map, "click", function(mouseEvent) {
      searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
        if (status === daum.maps.services.Status.OK) {
          // console.log(result);
          // console.log(status);
          var detailAddr = !!result[0].road_address
            ? "<div>도로명주소 : " +
              result[0].road_address.address_name +
              "</div>"
            : "";
          detailAddr +=
            "<div>지번 주소 : " + result[0].address.address_name + "</div>";

          var content =
            '<div className={cx("bAddr")}>' +
            '<span className={cx("title")}></span>' +
            detailAddr +
            "</div>";
          // getRoadAddr(result[0].road_address.address_name);
          // getAddr(result[0].address.address_name);

          // 마커를 클릭한 위치에 표시합니다
          marker.setPosition(mouseEvent.latLng);
          marker.setMap(map);
          // console.log(mouseEvent.latLng);
          // console.log(mouseEvent);

          // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
          infowindow.setContent(content);
          infowindow.open(map, marker);
        }
      });
    });

    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
    daum.maps.event.addListener(map, "idle", function() {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });

    function searchAddrFromCoords(coords, callback) {
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    function displayCenterInfo(result, status) {
      if (status === daum.maps.services.Status.OK) {
        // console.log(result);
        for (var i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[i].region_type === "H") {
            // infoDiv.innerHTML = result[i].address_name; // library 초기 상태
            infoDiv.innerHTML =
              result[i].region_2depth_name + " " + result[i].region_3depth_name; // customed
            // console.log(result[i]);
            break;
          }
        }
      }
    }
  };

  getRoadAddr = roadAddress => {
    this.setState({
      roadAddress
    });
  };
  // getAddr = address => {
  //   this.setState({
  //     address
  //   });
  // };

  handleAddressType = () => {
    this.setState(prevState => ({
      addressType: !prevState.addressType
    }));
  };

  handleRefreshBtn = () => {
    this.componentDidMount();
  };

  render() {
    const { onBackBtn, onAddressSetting } = this.props;
    return (
      <>
        <div className={cx("map_wrap")}>
          <div ref={this.mapRef} className={cx("map")} />
          <button onClick={onBackBtn} className={cx("backBtn")}>
            ←
          </button>
          <div className={cx("guideTxt")}>
            지도를 움직여 배달 받을 위치를 설정하세요
          </div>
          {/* <div className={cx("marker")}>⬇</div> */}
          <div className={cx("marker")}>
            <Crosshair />
          </div>
          <div className={cx("centered")}>x</div>
          <div className={cx("bottomContainer")}>
            <button
              onClick={() => this.handleRefreshBtn()}
              className={cx("currentLocationBtn")}
            >
              <Crosshair />
            </button>
            <div className={cx("hAddr")}>
              <span ref={this.centerAddrRef} className={cx("centerAddr")} />
              {/* <button className={cx("addressTypeBtn")}>{address}</button> */}
              {/* <button className={cx("addressTypeBtn")}>{roadAddress}</button> */}
              <button
                onClick={() => this.handleAddressType()}
                className={cx("addressTypeBtn")}
              >
                지번주소로 보기
              </button>
            </div>
            <button className={cx("settingBtn")}>이 위치로 주소 설정</button>
          </div>
        </div>
      </>
    );
  }
}
