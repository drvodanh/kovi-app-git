import Button from "../Button";

import className from "classnames/bind";
import style from "./Menus.module.scss";
const cx = className.bind(style);

function MenuItems({ data, className, onClick }) {
  const classes = cx("menu-item", {
    [className]: className,
  });

  return (
    <Button
      leftIcon={data.icon}
      to={data.to}
      className={classes}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItems;
