import React from "react";
import styles from "./Table.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Table = props => {
  const { addr, loadAddr, tel, request , style } = props;
  return (
    <div className={cx("table")} style={style}>
      <table>
        <tbody>
          <tr>
            <td>배달주소</td>
            <td>
              <p>{addr}</p>
              <p className={cx("road-addr")}>{loadAddr}</p>
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>{tel}</td>
          </tr>
          <tr>
            <td>요청사항</td>
            <td>{request}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
Table.defaultProps = {
  addr: "지번주소",
  loadAddr: "도로명주소",
  tel: "전화번호",
  request: "(없음)"
};

export default Table;
