import React from "react";

import { Link } from "react-router-dom";

const TopMenu = () => {
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
        <Link to="/login">로그인</Link>
      </span>
    </div>
  );
};

export default TopMenu;
