import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Store 탑재를 위한 Provider 객체와 store 구성(생성)객체를 참조한다.
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

// Provider 컴포넌트는 리액트 최상위 컴포넌트인 App 컴포넌트와 Store와 연결을 제공하는 컴포넌트이다.
// Provider하위에 존재하는 모든 UI 컴포넌트에서는 STORE에 접근이 가능하다.
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
