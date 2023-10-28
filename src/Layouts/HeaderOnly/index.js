import { Link } from "react-router-dom";
import { Header } from "../components";

import className from "classnames/bind";
import style from "./HeaderOnly.module.scss";
const cx = className.bind(style);

function HeaderOnly({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("wrapper-container", "row")}>
        <div className={cx("col-xl-3 col-md-2 d-none d-md-block")}>
          <div className={cx("back-home")}>
            <Link to="/"> --Home</Link>
          </div>
        </div>
        <div className={cx("col-xl-9 col-md-10")}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderOnly;
