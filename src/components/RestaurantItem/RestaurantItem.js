import React from "react";
import styles from "./RestaurantItem.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Right } from "../../svg/chevron-right.svg";
import { ReactComponent as Star } from "../../svg/star.svg";

const cx = classNames.bind(styles);

const RestaurantItem = ({ logo, name, star, review, comment, menu }) => {
  return (
    <div className={cx("restaurant-item")}>
      <div className={cx("restaurant-img")}>
        <img src={logo} alt="" />
      </div>
      <div className={cx("restaurant-description")}>
        <p className={cx("title")}>{name}</p>
        <p className={cx("detail")}>
          <span>
            <Star
              style={{
                fill: "#fdc025",
                stroke: "rgba(0, 0, 0, 0.3)",
                transform: "translateY(25%)"
              }}
            />
            : <span>{star}</span>
          </span>
          <span>
            최근리뷰 <span>{review}</span>+
          </span>
          <span>
            최근사장님댓글 <span>{comment}</span>
          </span>
        </p>
        <p className={cx("menu")}>{menu}</p>
      </div>
      <div className={cx("restaurant-link")}>
        <Right style={{ transform: "scale(1.5)", fill: "#666" }} />
      </div>
    </div>
  );
};
RestaurantItem.defaultProps = {
  logo:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEX///8AeK7lGTcAdq0AdKwAcqsAbagAcKoAe7D6/f4bg7Xi7/XU5e8Ac6xbncMAbKj1oKeXvtfjAB6pyt5vqMnkDDAzi7nc6vLz+vz++Pnr9PjB2ujxk52NutSGtdG20+P97vCgxdvkAChGk70AZqVnpMhUmcHA2OclhbXoP1PmJD95rc36297M4ezufYjzqbHsZXP85ej2usDjABTkACL51djpRFf4yc7qVmbiAAAmpRZ3AAAGJElEQVR4nO2Y63baOBSF7UiybAw4DsR48BhCHAhTSi/TzrTz/i82R0eWuTeGpCtrsfb3B2MJ6WxJ5yI8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEw99/vLcJv5eHD9/+umqJDx/ub+6vWaIReHPNEq3AK5boBF6txI3AK5W4LfAqJe4KvEKJTZC5e7y7ynDjBD5++ep9/fJ4fRKbHfzJX39e3S42Pvj9B3//8b32xX/f2bA34/ZbHV7uPvL3f2qFN98e3tewN2JcRbd3VtHjZ35z+1gL/vOdTXsbxqHOGon3X+nNx/vfJjAuV9O2faflIHqLOceh8CVJrA/q/afPn37fDhZayWDRqmuUBUqH8evnNAJ9luh28fFwB+dZQzVP15evLE8WDNp0XWljV3XxVA4rcEfizeEOdqRokCoQq/Fls40Snmvepu+SDdMXztTgBB5K3DmiHdfLIlRvdtF0sVW4atO3ehOFG4H7End9cE8haQxaWXlotqIfP3XbdC0SmlR0LpqmYVvgrsS9IHOgkJypvGTGvAoC2coNSWIV+sFlZ8VhBB6XuB9Fa4U6CAKtnMStncjbx564+1Lfpj3q6NcFGhIoEl9ZiyXZLlzSOEgTVmGvOxqN1qnfswfVzT7td/wwm9Rx/blM07SMvXiSdToVb1cxX4bL4cg8zlJD5OX8Sa2DPrX1i2amwYIGq9LcPC+fTEiKBkMaKeunrc72nkBZxV6UmqisV3FeLIXdxcM8aBVqu7rRQtodZZvXoZZ0EoSqPXMRKKWSwSRRxo0o99HBlNQuk2dq1dSonmKvm9Cn7nTpx9w2tPMUoRYcybQ5ncXarF9PyzqEZ8W+XS8JFEt+KlUd3fKQD+p/h4l+RyGdHlaojBXTpDnnujLtfSNfhO4s63QpXXSiZsH5kBSaZfXDxklsipw1g4mgziiDZMuLntZnCIzIB1VqtWpfx43WLP9x2HtXoZey/ZIWfh1sObLqO4Vb7t3brMDzvsINIqOfPm+p8fWEzbStUtFWk21nCPTiJ7LIBrVIi9r2AVmeHIteewrX2jmibRC1jGDqFNJBk02mVfbJLOi+QjLddu/ltRqSY18lxu/WAS/XJJ1kgUzO88Q08GWfnwraQ7v9c3kiCewpHOl63acBm75c9ZXbCatQLtOJ3Uih5rNF77hCakuHwo6dezN+p7JhxUvC1hVcuvGJjRetSqEtysDXZhPHoTEtssOdyHJH95BqRpajjBN3ecuS2L5im6a2l1k8rk+OKORQomqFFQ9WuldCUUCNeQmln83L5/xMgSQxoeBQDtk02UkHQy1OpfE9haX1w7kXms+Q37Fv6mkt2iyd3WluHcqjCrlgyXWtUG5qGO6vzaGsrFuTJ2o5P7uCo13cuIuip5N1yq7CPHR+xRnBXoZ4X0nZgcKopUL+lDZtDHi5THqJQ9XEVynOvkuVgb/N6UJsNx9WdT7sWoPtss/YqNcqFDZcTngPOf3lQxm4bei1u1melPiLStMqVOM8z+NBpw5/ZEzm/Iu9mSu5ixV6nGW1+Qcg5m51CvOiopwvFevvXeSLLQS6pCCl7Gl3aoLCJUa9mNnAKaT3CoXcydfDwYR71S5ZVTZH8BkJLrjyN7v4y7vCkbuFNuFyrOuMYLdVTV6jsGtNkfWZ5MKN8pEIstl61F3xwb3ktlhL/PVl6FBhXfWX27WJCPPXKPTmO4NxY2QOv6A7jeYkdFZRs5GYvCjwQKFI3AV4sbFKcN3wCoVRU8KSmB7X9ZMd0Vy8XyIxOJ0mnEK5NQ+lpmpTP81dZapCftk39QuXEiOuuHYVurqAT6TdpjxwCilKu8F0hwV6I76YWHpHC8pWpGH6Qo/KDx10U5vt+HtRaSIIJzaXDAV1kjYi0pPP95cJvyTZHTOEHHsjadr40EV2bBslBxldsWmwsrkGr1cdHZgJ/PnoUoFtiBqONI6LwXRzc9/02urfPLqH/bbm56MpDbY7fryeTovRm/w5DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwHn8D5tAY7+hYduaAAAAAElFTkSuQmCC",
  title: "롯데리아",
  star: "3.5",
  review: 30,
  comment: 10,
  menu: "T-REX 버거"
};

export default RestaurantItem;
