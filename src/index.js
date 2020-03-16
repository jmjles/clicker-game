import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './styles/index.css'
import {
  CssBaseline,
  ThemeProvider,
  StylesProvider,
  createMuiTheme
} from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#252628"
    },
    secondary: {
      main: "#598288"
    },
    background: {
      paper: "#DCE7E0",
      default: "#B7CBCA"
    },
    text: {
      primary: "#181C20"
    }
  }
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById("root")
);
