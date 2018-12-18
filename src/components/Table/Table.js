import React from "react";
import styles from "./Table.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Table = props => {
  const { shipping, phone, comment, style } = props;
  return <div className={cx("table")} style={style}>
      <table>
        <tbody>
          <tr>
            <td>배달주소</td>
            <td>
              <p>{shipping}</p>
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
          <td>{phone}</td>
          </tr>
          <tr>
            <td>요청사항</td>
          <td>{comment}</td>
          </tr>
        </tbody>
      </table>
    </div>;
};
Table.defaultProps = {
  shipping: "지번주소",
  phone: "전화번호",
  comment: "(없음)"
};

export default Table;
