import "./App.css";

// react-router-dom 패키지의 BrowserRouter, index.js에 있는것을 store 참조하면서.. app.js에 참조하여 사용함
import { BrowserRouter } from "react-router-dom";

// 라우팅을위한 Router 객체를 참조한다.
import { Route } from "react-router-dom";

// axios 참조
import axios from "axios";

// 리덕스 : 구독을 위한 useSelector훅을 참조한다.
// import { useSelector } from "react-redux";

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
  //
  // const token = useSelector((state) => state.Login.token);

  // axios의 전역 기본 정보 세팅하기
  axios.defaults.baseURL = "http://localhost:3005";
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return (
    <BrowserRouter>
      <div>
        <TopMenu></TopMenu>

        {/* 메인페이지 및 게시글 관리 라우팅 규칙 정의 */}
        <Route path="/" component={Main} exact={true}></Route>
        <Route path="/article/list" component={ArticleList}></Route>
        <Route path="/article/regist" component={ArticleRegist}></Route>
        <Route path="/article/modify/:idx" component={ArticleModify}></Route>

        {/* 회원정보관리 라우팅 정의 */}
        <Route path="/member/list" component={MemberList}></Route>
        <Route path="/member/regist" component={MemberRegist}></Route>
        <Route path="/member/modify/:idx" component={MemberModify}></Route>
        <Route path="/login" component={Login}></Route>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
