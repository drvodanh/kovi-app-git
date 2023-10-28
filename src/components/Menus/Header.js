import className from "classnames/bind";
import style from "./Menus.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(style);

function Header({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className={cx("header-title")}>
        <h4>{title}</h4>
      </div>
    </header>
  );
}

export default Header;
