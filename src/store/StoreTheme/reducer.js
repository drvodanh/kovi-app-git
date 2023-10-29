import { CHECK_THEME } from "./constants";

const checkThemeDefault = localStorage.getItem(`checkThemeDefault`);

const defaultCheck = checkThemeDefault ? JSON.parse(checkThemeDefault) : true;

const intStateTheme = {
  checkTheme: defaultCheck,
  darkMode: {
    backgroundColor: "#2a3850",
    backgroundColorS: "#3b6793",
    color: "#fff",
    borderColor: "#fff",
    hoverColor: "#2e8b57",
  },
  lightMode: {
    backgroundColor: "#fff",
    backgroundColorS: "#e3e3e4",
    color: "#000",
    borderColor: "rgba(22, 24, 35, .2)",
    hoverColor: "#ccc",
  },
};
function reducerTheme(state, action) {
  switch (action.type) {
    case CHECK_THEME:
      return {
        ...state,
        checkTheme: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
}

export { intStateTheme };
export default reducerTheme;
