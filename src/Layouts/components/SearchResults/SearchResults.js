import React from "react";
import { Link } from "react-router-dom";

import { useStoreTheme } from "~/store";

import className from "classnames/bind";
import style from "./SearchResults.module.scss";
import { SearchIcon } from "~/components/Icons";
const cx = className.bind(style);

function SearchResults({ data = [] }) {
  const [state] = useStoreTheme();
  const { checkTheme, darkMode, lightMode } = state;

  // .slice(0, 5)
  return (
    <div className={cx("wrapper")}>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Link
            to={`/search/word=${item[0]}`}
            key={index}
            className={cx("result")}
            style={{
              backgroundColor: checkTheme
                ? lightMode.backgroundColor
                : darkMode.backgroundColor,
              color: checkTheme ? lightMode.color : darkMode.color,
            }}
          >
            <span className={cx("result-word")}>{item[0]}</span>
            <span className={cx("result-mean")}>{item[3]}</span>
            <div className={cx("icon")}>
              <SearchIcon />
            </div>
          </Link>
        ))
      ) : (
        <div className={cx("no-result")}>
          <p>Chưa có kết quả Tìm kiếm</p>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
