import "./App.css";

// 라우팅을위한 Router 객체를 참조한다.
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      {/* Route 객체의 path는 routing 주소를 정의하고 해당주소를 브라우저에서 조회하면 
      해당 지정된 컴포넌트가 App에 노출된다.  */}

      {/* '/about' 경로는 기본적으로 '/' 경로를 포함하고 있어 홈과 회사소개 컴포넌트가 둘 다 나타나게된다.
      홈 컴포넌트 라우팅 예약props중에 exact 값을 true로 설정하게 되면 '/' 만 표기했을때에만 홈이 나타나게된다.  */}
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}

export default App;
