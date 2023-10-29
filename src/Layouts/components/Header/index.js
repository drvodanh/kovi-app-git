// Component
import Search from "~/Layouts/components/Search";
import { ProviderMenus, useStoreTheme } from "~/store";

// img, icon
import image from "~/assets/image";
import Menus from "~/components/Menus";
import { MenuIcon } from "~/components/Icons";

// css
import className from "classnames/bind";
import style from "./Header.module.scss";
const cx = className.bind(style);

function Header() {
  const [state] = useStoreTheme();
  const { checkTheme, darkMode, lightMode } = state;

  return (
    <div
      className={cx("wrapper", {
        darkMode: !checkTheme,
      })}
      style={{
        backgroundColor: checkTheme
          ? lightMode.backgroundColor
          : darkMode.backgroundColor,
        color: checkTheme ? lightMode.color : darkMode.color,
      }}
    >
      <div className={cx("inner")}>
        <div className={cx("wrapper-container", "row")}>
          <div className={cx("col-xl-3 col-md-2 d-none d-md-block")}>
            <div className={cx("contain")}>
              <div className={cx("logo")}>
                <img src={image.logo} alt="KoVi" />
              </div>
            </div>
          </div>

          <div className={cx("col-xl-6 col-md-8 col-sm-10 col-10")}>
            <div className={cx("contain-search")}>
              <Search />
            </div>
          </div>

          <div className={cx("col-xl-3 col-md-2 col-sm-2 col-2")}>
            <div className={cx("contain")}>
              <div className={cx("more")}>
                <ProviderMenus>
                  <Menus className={cx("menu")}>
                    <div className={cx("more-icon")}>
                      <MenuIcon />
                    </div>
                  </Menus>
                </ProviderMenus>
              </div>
              <div className={cx("theme-change")}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
