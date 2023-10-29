import Button from "../Button";

import className from "classnames/bind";
import style from "./Menus.module.scss";
const cx = className.bind(style);

function MenuItems({ data, className, onClick, ...passProps }) {
  const _props = { onClick, ...passProps };

  const classes = cx("menu-item", {
    [className]: className,
  });

  return (
    <Button leftIcon={data.icon} to={data.to} className={classes} {..._props}>
      {data.title}
    </Button>
  );
}

export default MenuItems;
