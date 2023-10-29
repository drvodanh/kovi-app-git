import { createContext } from "react";

const Context = createContext();
const ContextTheme = createContext();
const ContextMenus = createContext();
const ContextResults = createContext();

export { ContextTheme, ContextMenus, ContextResults };
export default Context;
