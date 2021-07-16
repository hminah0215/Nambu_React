import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    userpwd: "",
  });

  //
  const onLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // 로그인버튼
  const onLogin = () => {
    // alert("로그인 성공!");
    // step1) 백엔드 로그인 후 사용자 정보와 토큰정보를 가져온다.
    axios
      .post("http://localhost:3005/api/members/login", login)
      .then((result) => {
        console.log("로그인 정보===>", result);

        if (result.data.code === "200") {
          console.log("jwt토큰값", result.data.data);
          alert("로그인 성공");
        } else {
          alert("백엔드 에러 발생 - 회원로그인");
        }
      })
      .catch((err) => {
        console.error(err);
      });

    // step2) 가져온 정보를 전역 데이터 저장소에 전역스테이트 정보로 업데이트 한다.
  };

  return (
    <div>
      <h1>로그인</h1>
      <span>메일주소</span>
      <input type="text" name="email" value={login.email} onChange={onLoginChange}></input>
      <hr />
      <span>비밀번호</span>
      <input type="text" name="userpwd" value={login.userpwd} onChange={onLoginChange}></input>
      <hr />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
};

export default Login;
