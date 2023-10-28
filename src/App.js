import { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicPath } from "~/routes";
import { DefaultLayout } from "~/Layouts";
import { useStoreTheme } from "./store";

import className from "classnames/bind";
import style from "./App.module.scss";
const cx = className.bind(style);

function App() {
  const [state] = useStoreTheme();
  const { checkTheme, darkMode, lightMode } = state;

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = checkTheme
      ? lightMode.backgroundColor
      : darkMode.backgroundColor;
  }, [checkTheme, darkMode.backgroundColor, lightMode.backgroundColor]);

  return (
    <Router>
      <div
        className={cx("App")}
        style={{
          backgroundColor: checkTheme
            ? lightMode.backgroundColor
            : darkMode.backgroundColor,
          color: checkTheme ? lightMode.color : darkMode.color,
        }}
      >
        <Routes>
          {publicPath.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
