// import logo from "./logo.svg";
import "./App.css";

// 프로필 MyComponent 참조
import Profile from "./MyComponent";

import Profile2 from "./MyComponent2";

import Profile3 from "./Say";

import Say2 from "./Say2";

function App() {
  return (
    <div>
      {/* 프로파일 자식 컴포넌트 삽입 */}
      <Profile name="minah" email="a@aaa.com" telephone="012-345-6789" age="20">
        내 소개1
      </Profile>

      <hr></hr>

      <Profile2 name="lion" email="b@aaa.com" telephone="000-888-9999" age={30}></Profile2>

      <hr></hr>

      <Profile3 title="useState를 통한 상태관리기법">상태관리예시</Profile3>

      <hr />
      <Say2></Say2>
    </div>
  );
}

export default App;
