import React from "react";

import { Link, useHistory } from "react-router-dom";

// 리덕스 : 구독을 위한 useSelector훅을 참조한다.
import { useSelector } from "react-redux";

// 각종 유틸리티 함수를 참조한다.
import { getJWTtoken, isMemberLogined, getLoginMember } from "../helpers/authUtils";

const TopMenu = () => {
  // (state-최상위 전역 데이터 객체) => state.리듀서함수
  const token = useSelector((state) => state.Login.token);

  const history = useHistory();

  // 사용자 로그아웃 처리 - 로컬스토리지를 삭제한다.
  const logOut = () => {
    window.localStorage.removeItem("jwttoken");
    history.push("/");
  };

  return (
    <div style={{ width: "100%", height: "50px", background: "gray" }}>
      <span>
        <Link to="/">홈</Link>
      </span>
      &nbsp;
      <span>
        <Link to="/article/list">게시글 목록</Link>
      </span>
      &nbsp;
      <span>
        <Link to="/member/list">회원 목록</Link>
      </span>
      &nbsp;
      <span>
        {/* jsx 내부에선 , 즉시 실행함수 또는 삼항연산자를 사용해서 if문을 사용해야한다. */}
        {/* {(function () {
          if (token !== undefined) return <Link to="/login">로그아웃</Link>;
          else return <Link to="/login">로그인</Link>;
        })()} */}
        {token !== undefined ? (
          <button onClick={logOut}>로그아웃</button>
        ) : (
          <Link to="/login">로그인</Link>
        )}
        <hr />
        {isMemberLogined() === true ? (
          <b>로그인 된 상태입니다.</b>
        ) : (
          <b>로그인 되지않은 상태입니다.</b>
        )}
        현재 로그인 토큰값 : {token}
        <br />
        &nbsp; 현재 접속 사용자 이름 :{getLoginMember() == null ? "" : getLoginMember().username}
      </span>
    </div>
  );
};

export default TopMenu;
