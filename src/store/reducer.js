import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faComments } from "@fortawesome/free-solid-svg-icons";

import { SET_SEARCH_INPUT, ADD_SEARCH_INPUT } from "./constants";

const intState = {
  setSearchValue: [],
  searchValueCheck: "",
  defaultFn: () => {},
  menuItems: [
    {
      icon: <FontAwesomeIcon icon={faGlobe} />,
      title: "Korean",
      children: {
        title: "Language",
        data: [
          {
            code: "ko",
            title: "Korean",
            type: "language",
          },
          {
            code: "jp",
            title: "Japanese",
            type: "language",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      title: "Home",
      to: "/",
      separate: true,
    },
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      title: "Verbs",
      to: "/verbs",
    },
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      title: "Dict",
      to: "/dict",
    },
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      title: "Info",
      to: "/info",
    },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchValueCheck: action.payload,
      };
    case ADD_SEARCH_INPUT:
      return {
        ...state,
        setSearchValue: [action.payload],
      };
    default:
      throw new Error("Invalid action");
  }
}

export { intState };
export default reducer;
