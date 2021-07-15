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
        <Link to="/about">회사소개</Link>
      </span>
      &nbsp;
      <span>
        <Link to="/login">로그인</Link>
      </span>
    </div>
  );
};

export default TopMenu;
