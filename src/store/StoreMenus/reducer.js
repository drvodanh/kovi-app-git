import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faComments } from "@fortawesome/free-solid-svg-icons";

const intStateMenus = {
  menuItems: [
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      title: "Menu",
      to: "",
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} />,
      title: "Korean",
      separate: true,
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
function reducerMenus(state, action) {
  switch (action.type) {
    default:
      throw new Error("Invalid action");
  }
}

export { intStateMenus };
export default reducerMenus;
