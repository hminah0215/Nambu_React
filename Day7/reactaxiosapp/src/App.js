import "./App.css";

// 라우팅을위한 Router 객체를 참조한다.
import { Route } from "react-router-dom";

// 각종 재사용 컴포넌트에 대한 참조
import Footer from "./components/Footer";
import TopMenu from "./components/TopMenu";

// 각종 페이지 컴포넌트에 대한 참조
import Main from "./pages/Main";
import ArticleList from "./pages/articles/ArticleList";
import ArticleRegist from "./pages/articles/ArticleRegist";
import ArticleModify from "./pages/articles/ArticleModify";
import MemberList from "./pages/members/MemberList";
import MemberRegist from "./pages/members/MemberRegist";
import MemberModify from "./pages/members/MemberModify";
import Login from "./pages/members/Login";

function App() {
  return (
    <div>
      <TopMenu></TopMenu>

      <Route path="/" component={Main} exact={true}></Route>
      <Route path="/article/list" component={ArticleList}></Route>
      <Route path="/article/regist" component={ArticleRegist}></Route>
      <Route path="/article/modify/:idx" component={ArticleModify}></Route>

      <Route path="/member/list" component={MemberList}></Route>
      <Route path="/member/regist" component={MemberRegist}></Route>
      <Route path="/member/modify/:idx" component={MemberModify}></Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
