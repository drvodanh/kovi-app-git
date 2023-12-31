import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "~/App";
import { StoreProvider, ProviderTheme } from "./store";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./components/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <StoreProvider>
      <ProviderTheme>
        <App />
      </ProviderTheme>
    </StoreProvider>
  </GlobalStyles>
);

reportWebVitals();
