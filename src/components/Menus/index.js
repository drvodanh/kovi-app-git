import { useState } from "react";
import Tippy from "@tippyjs/react/headless";

import { useStoreMenus } from "~/store";

import { Wrapper as PopperWrapper } from "../Popper";
import Header from "./Header";

import MenuItems from "./MenuItems";

import className from "classnames/bind";
import style from "./Menus.module.scss";
const cx = className.bind(style);

const defaultFn = () => {};

function Menus({ className, children, onChange = defaultFn }) {
  const [state] = useStoreMenus();

  const { menuItems } = state;

  const [menu, setMenu] = useState([{ data: menuItems }]);
  const [titleChil, setChilTitle] = useState("");
  const currentMenu = menu[menu.length - 1];

  const classes = cx("menu-list", {
    [className]: className,
  });

  //   const handleChangeMenu = (menuItem) => {
  //     switch (menuItem.type) {
  //       case "language":
  //         ////////!SECTION
  //         break;
  //       default:
  //     }
  //   };

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setMenu((pre) => [...pre, item.children]);
              setChilTitle(item.children.title);
            } else {
              //   onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      hideOnClick="toggle"
      //   visible
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      offset={[0, -40]}
      onHidden={() => setMenu((pre) => pre.slice(0, 1))}
      render={(attrs) => (
        <div className={classes} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {menu.length > 1 && (
              <Header
                title={titleChil}
                onBack={() => {
                  setMenu((pre) => pre.slice(0, pre.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menus;
