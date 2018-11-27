import React, { Component } from 'react'
import "./AddressSearch.scss";

class AddressSearch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="Container">
        <div className="AddressSearch">
          <button>X</button>
          <h1 className="header">지번, 도로명, 건물명을 입력하세요</h1>
          <input className="input" label="주소검색" type="text" name="address" />
          <button>돋보기</button>
          <button>현 위치로 주소 설정</button>
          <h2>최근 주소</h2>
        </div>
      </div>
    )
  }
}

export default AddressSearch