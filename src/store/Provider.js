import { useReducer } from "react";
import Context, { ContextTheme, ContextMenus, ContextResults } from "./Context";
import reducer, { intState } from "./reducer";
import reducerTheme, { intStateTheme } from "./StoreTheme/reducer";
import reducerMenus, { intStateMenus } from "./StoreMenus/reducer";
import reducerResults, { intStateResults } from "./StoreResults/reducer";

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

export { ProviderTheme, ProviderMenus };
export default Provider;
