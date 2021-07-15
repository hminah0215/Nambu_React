import "./App.css";

// 라우팅을위한 Router 객체를 참조한다.
import { Route } from "react-router-dom";

// 각종 재사용 컴포넌트에 대한 참조
import TopMenu from "./components/TopMenu";

// 각종 페이지 컴포넌트 참조
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <TopMenu></TopMenu>

      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={Login}></Route>
    </div>
  );
}

export default App;
