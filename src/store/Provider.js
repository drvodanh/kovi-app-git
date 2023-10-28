import { useReducer } from "react";
import Context, { ContextTheme, ContextMenus } from "./Context";
import reducer, { intState } from "./reducer";
import reducerTheme, { intStateTheme } from "./StoreTheme/reducer";
import reducerMenus, { intStateMenus } from "./StoreMenus/reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, intState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
function ProviderTheme({ children }) {
  const [state, dispatch] = useReducer(reducerTheme, intStateTheme);
  return (
    <ContextTheme.Provider value={[state, dispatch]}>
      {children}
    </ContextTheme.Provider>
  );
}
function ProviderMenus({ children }) {
  const [state, dispatch] = useReducer(reducerMenus, intStateMenus);
  return (
    <ContextMenus.Provider value={[state, dispatch]}>
      {children}
    </ContextMenus.Provider>
  );
}

export { ProviderTheme };
export { ProviderMenus };
export default Provider;
