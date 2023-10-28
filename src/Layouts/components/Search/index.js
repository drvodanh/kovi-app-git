import { useEffect, useState, useRef } from "react";
import Tippy from "@tippyjs/react/headless";

import { ClearIcon, LoadIcon, SearchIcon } from "~/components/Icons";
import SearchResults from "../SearchResults/SearchResults";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { useDebounce } from "~/hooks";
import { useStoreTheme } from "~/store";

import className from "classnames/bind";
import style from "./Search.module.scss";
const cx = className.bind(style);

const keyFixUrlApi = process.env.REACT_APP_API_KEY_FIX;
const keyFixUrl = process.env.REACT_APP_API_URL_FIX;
// const keyFixUrlDrMS = process.env.REACT_APP_API_URL_DR_MI_SV;
const apiUrlKo1 = process.env.REACT_APP_API_URL_KO_1;

function Search() {
  const [state] = useStoreTheme();
  const { checkTheme, lightMode, darkMode } = state;

  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const tippyRef = useRef(); // Add a ref for Tippy

  const debounce = useDebounce(inputValue, 10);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      setShowResults(false);
      return;
    } else {
      setShowResults(true);
    }
    setLoading(true);

    const urlRequest = `${keyFixUrl + apiUrlKo1 + debounce}`;
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: {
            "x-cors-api-key": keyFixUrlApi,
          },
        };

        const response = await fetch(urlRequest, requestOptions);

        if (response.ok) {
          const resultData = await response.json();

          setSearchResult(resultData.items.flat());
          setLoading(false);

          // Display results when there's data and input focus
          if (debounce !== "") {
            setShowResults(true);
          }
        } else {
          console.error("Failed to fetch. Status: " + response.status);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error while fetching data: " + error);
        setLoading(false);
      }
    };

    fetchData();
  }, [debounce]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
    setSearchResult([]);
    setShowResults(false);
    inputRef.current.focus();
  };
  const handleOnBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 100); // Delay the closing of Tippy to allow click events to trigger
  };
  const handleFocus = () => {
    setShowResults(true);
  };
  const handleClickTippy = () => {
    tippyRef.current?.show(); // Show Tippy when clicking
  };

  return (
    <div className={cx("contain")}>
      <Tippy
        visible={showResults && debounce.length > 0}
        // visible
        interactive
        placement="bottom-end"
        onCreate={(instance) => {
          tippyRef.current = instance; // Assign the Tippy instance to the ref
        }}
        render={(attrs) => (
          <div
            className={cx("search-results-popup", "tippy-search-results")}
            tabIndex="-1"
            {...attrs}
            onClick={handleClickTippy}
          >
            <PopperWrapper>
              <SearchResults data={searchResult} />
            </PopperWrapper>
          </div>
        )}
      >
        <div
          className={cx("search-label", {
            dark: !checkTheme,
          })}
          style={{
            backgroundColor: checkTheme
              ? lightMode.backgroundColorS
              : darkMode.backgroundColorS,
          }}
        >
          <div className={cx("input-contain")}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              spellCheck={false}
              onChange={(e) => handleInputValue(e)}
              onBlur={handleOnBlur}
              onFocus={handleFocus}
              placeholder="Nhập từ tìm kiếm..."
              style={{
                color: checkTheme ? lightMode.color : darkMode.color,
              }}
            />
            {loading && (
              <button className={cx("loading")}>
                <LoadIcon />
              </button>
            )}
            {inputValue && !loading && (
              <button className={cx("clear")} onClick={handleClearInput}>
                <ClearIcon />
              </button>
            )}
          </div>
          <button className={cx("search-btn")}>
            <SearchIcon />
          </button>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
