import { useContext } from "react";
import Context, { ContextTheme, ContextMenus } from "./Context";

export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
export const useStoreTheme = () => {
  const [state, dispatch] = useContext(ContextTheme);
  return [state, dispatch];
};
export const useStoreMenus = () => {
  const [state, dispatch] = useContext(ContextMenus);
  return [state, dispatch];
};
