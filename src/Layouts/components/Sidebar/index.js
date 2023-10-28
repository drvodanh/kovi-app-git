import { NavLink } from "react-router-dom";

import className from "classnames/bind";
import style from "./Sidebar.module.scss";
const cx = className.bind(style);

function Sidebar({ className }) {
  return (
    <div className={cx("wrapper", className)}>
      <div className={cx("wrapper-container")}>
        <div className={cx("menu-nav")}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dict">Dict</NavLink>
          <NavLink to="/verbs">Verbs</NavLink>
          <NavLink to="/info">Info</NavLink>
          <NavLink to="/search/more">More</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
