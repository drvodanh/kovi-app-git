import { Link } from "react-router-dom";
import { useStoreTheme } from "~/store";

import className from "classnames/bind";
import style from "./Button.module.scss";
const cx = className.bind(style);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  leftIcon,
  rightIcon,
  disable,
  children,
  className,
  onClick,
  ...passProps
}) {
  const [state] = useStoreTheme();
  const { checkTheme, darkMode, lightMode } = state;

  let Component = "button";
  const _props = { onClick, ...passProps };

  //xoa su kien button khi disable
  if (disable) {
    Object.keys(_props).forEach((propEvent) => {
      if (
        propEvent.startsWith("on") &&
        typeof _props[propEvent] === "function"
      ) {
        delete _props[propEvent];
      }
    });
  }
  if (to) {
    _props.to = to;
    Component = Link;
  } else if (href) {
    _props.href = href;
    Component = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    disable,
    [className]: className,
  });

  return (
    <Component
      className={classes}
      {..._props}
      style={{
        backgroundColor: checkTheme
          ? lightMode.backgroundColor
          : darkMode.backgroundColor,
        color: checkTheme ? lightMode.color : darkMode.color,
      }}
    >
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
