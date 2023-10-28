import { useEffect } from "react";
import { useStoreTheme, actionsTheme } from "~/store";
import { SunIcon, MoonIcon } from "../Icons";

import className from "classnames/bind";
import style from "./Theme.module.scss";
const cx = className.bind(style);

// localStorage.setItem("key", "value")
// localStorage.getItem('key')
// localStorage.removeItem(key)
// localStorage.clear()

function ThemeCheck({ className }) {
  const [state, dispatch] = useStoreTheme();
  const { checkTheme } = state;
  useEffect(() => {
    localStorage.setItem("checkThemeDefault", checkTheme);
  }, [checkTheme]);

  const handleChecked = () => {
    dispatch(actionsTheme.checkTheme(!checkTheme));
  };

  return (
    <div className={cx("wrapper", className)}>
      <label className={cx("theme-check", { checked: checkTheme })}>
        <input type="checkbox" onChange={handleChecked} />
        <SunIcon
          className={cx("icon", "left", {
            check: checkTheme,
          })}
        />
        <MoonIcon
          className={cx("icon", "right", {
            check: !checkTheme,
          })}
        />
      </label>
    </div>
  );
}

export default ThemeCheck;
