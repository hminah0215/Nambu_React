import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

// Profile 컴포넌트 참조
import Profile from "./Profile";

// Say 컴포넌트 참조 (state 연습 파일)
import Say from "./Say";

import Say2 from "./Say2";

class App extends Component {
  render() {
    return (
      <div>
        {/* 프로필 자식 컴포넌트 추가 */}
        <Profile name="민아" telephone="010-111-1111" email="a@aaaa.com" age={100}>
          프로필
        </Profile>

        <hr />

        <Say></Say>

        <hr />

        <Say2></Say2>
      </div>
    );
  }
}

export default App;
