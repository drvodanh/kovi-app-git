import { useState, useRef } from "react";
import Tippy from "@tippyjs/react/headless";

import { useStoreMenus, useStoreTheme } from "~/store";

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

  const [_state] = useStoreTheme();
  const { checkTheme, darkMode, lightMode } = _state;

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

  //   const tippyRef = useRef();
  //   const hideTippy = () => {
  //     tippyRef.current.hide();
  //     handleMouseLeave();
  //   };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = checkTheme
      ? lightMode.hoverColor
      : darkMode.hoverColor;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "";
  };

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            if (isParent) {
              setMenu((pre) => [...pre, item.children]);
              setChilTitle(item.children.title);
            } else {
              //   hideTippy();
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      //   visible
      //   onShow={(e) => (tippyRef.current = e)}
      hideOnClick="toggle"
      trigger="click"
      interactive
      //   delay={[0, 500]}
      placement="bottom-end"
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
