import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "routes";
import { store } from "store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import theme from "styles/theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
