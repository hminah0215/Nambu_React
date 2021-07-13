import "./App.css";

// 라우팅을위한 Router 객체를 참조한다.
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <div>
      {/* Link 메뉴 */}
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about?detail=true&qid=aaaa">회사소개</Link>
        </li>
        <li>
          <Link to="/company?qid=bbbb">회사소개(company주소)</Link>
        </li>
        <li>
          {/* profile 라우팅주소에 user1 이라는 파라메터 전달  */}
          <Link to="/profile/user1">회원소개</Link>
        </li>
      </ul>
      <hr />

      {/* Route 객체의 path는 routing 주소를 정의하고 해당주소를 브라우저에서 조회하면 
      해당 지정된 컴포넌트가 App에 노출된다.  */}

      {/* '/about' 경로는 기본적으로 '/' 경로를 포함하고 있어 홈과 회사소개 컴포넌트가 둘 다 나타나게된다.
      홈 컴포넌트 라우팅 예약props중에 exact 값을 true로 설정하게 되면 '/' 만 표기했을때에만 홈이 나타나게된다.  */}
      <Route path="/" component={Home} exact={true}></Route>

      {/* 동일한 화면 컴포넌트를 여러개의 라우팅 주소로 서비스할수도 있다. */}
      <Route path="/about" component={About}></Route>
      <Route path="/company" component={About}></Route>

      {/* URL주소에 포함시켜 전달할 파라메터 값에 대해 와일드카드로 파라메터명을 명시한다. */}
      <Route path="/profile/:username" component={Profile}></Route>
    </div>
  );
}

export default App;
