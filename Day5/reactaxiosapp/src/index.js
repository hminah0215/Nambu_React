import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// react-router-dom 패키지의 BrowserRouter
import { BrowserRouter } from "react-router-dom";

// 라우팅 처리를 위한 최상위 컴포넌트인 App 컴포넌트를
// BrowserRouter로 감싸준다.
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
