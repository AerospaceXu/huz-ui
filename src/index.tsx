import React from "react";
import ReactDOM from "react-dom";
import Layout from "./web/layouts";
import reportWebVitals from "./reportWebVitals";
import "github-markdown-css";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
