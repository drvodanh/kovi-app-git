import { useStoreTheme } from "~/store";

import className from "classnames/bind";
import style from "./Popper.module.scss";
const cx = className.bind(style);

function Wrapper({ children }) {
  const [state] = useStoreTheme();
  const { checkTheme, darkMode, lightMode } = state;

  return (
    <div
      className={cx("wrapper")}
      style={{
        backgroundColor: checkTheme
          ? lightMode.backgroundColor
          : darkMode.backgroundColor,
        color: checkTheme ? lightMode.color : darkMode.color,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
}

export default Wrapper;
