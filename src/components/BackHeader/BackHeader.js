import React from "react";
import styles from "./BackHeader.module.scss";
import classNames from "classnames/bind";
import { withRouter } from "react-router-dom";
import { ReactComponent as Left } from "../../svg/chevron-left.svg";

const cx = classNames.bind(styles);

const BackHeader = props => {
  const { title, style, history } = props;
  return (
    <div className={cx("back-header")} style={style}>
      <div className={cx("back")} onClick={() => history.goBack()}>
        <div>
          <Left style={{ transform: "scale(1.5)" }} />
        </div>
      </div>
      <div className={cx("title")}>{title}</div>
    </div>
  );
};
BackHeader.defaultProps = {
  title: "제목없음"
};

export default withRouter( BackHeader ) ;
