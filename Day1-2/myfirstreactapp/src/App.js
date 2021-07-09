// 리액트 패키지를 참조하고, Fragment 객체를 추가한다.
// Fragment객체는 최상위 HTML 태그 여러개를 하나로 묶어주는 역할을 제공한다.
import React, { Fragment } from 'react';

import logo from './logo.svg';
import './App.css';
// import 사용, node에서 require 썼던것과 동일함

// 최상위 컴포넌트에서 사용하고자 하는 자식 컴포넌트를 참조한다.
import MyComponent1 from './MyFirstFunctionComponent';
import MyComponent2 from './MyFirstClassComponent';

// 함수형 컴포넌트는 function 컴포넌트명(){ return (화면을 표시하는 JSX(X-HTML)코드 제공); }
function App() {
  const userName = '민아';

  // 스타일 객체 정의하기
  // 스타일 속성은 카멜식으로 표기하고 - 는 사용하지 않는다.
  const myStyle = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    // 2. Fragment 로 최상위 태그들을 감싸면 에러 안남!
    <Fragment>
      <div className="App">
        {/* 자식 컴포넌트를 출력한다 */}
        <MyComponent1></MyComponent1>

        <header className="App-header">
          {/* css 파일 내 정의된 class 스타일 적용하기 class가 아닌 className 속성 사용 */}
          <img src={logo} className="App-logo" alt="logo" />

          {/* 인라인 스타일 사용하기 */}
          <p style={{ backgroundColor: 'red', color: 'yellow' }}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 123
          </a>

          {userName === '민아' ? (
            <h1>민아님 반가워요...</h1>
          ) : (
            <h1>누구세요? </h1>
          )}
        </header>
      </div>

      {/* 자식 컴포넌트를 출력한다 */}
      <MyComponent2></MyComponent2>

      {/* CSS 파일에 정의된 CSS 클래스 적용할때는 className속성을 이용한다. */}
      <div className="App">클래스 적용하기</div>

      {/* 1. 그냥 이렇게만 최상위 태그를 추가하면 에러가 나는데... */}
      <div style={myStyle}>{userName}님 환영합니다!</div>
    </Fragment>
  );
}

export default App;
