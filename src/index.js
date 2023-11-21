import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppThemeprovider from "../src/theme/AppThemeProvider";
import { CssBaseline } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <AppThemeprovider>
      <App />
    </AppThemeprovider>
  </React.StrictMode>
);
