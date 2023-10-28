import { Header, Sidebar } from "../components";
import { ThemeCheck } from "~/components/Theme";

import className from "classnames/bind";
import style from "./DefaultLayout.module.scss";
const cx = className.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("wrapper-container")}>
        <div className={cx("container", "row")}>
          <Sidebar className={cx("", "col-xl-3 col-md-3 d-none d-md-block")} />
          <div className={cx("content", "col-xl-9 col-md-9")}>
            <div className={cx("content-inner")}>
              {children}
              <ThemeCheck className={cx("dark-mode")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
