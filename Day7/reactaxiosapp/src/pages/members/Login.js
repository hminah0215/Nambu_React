import React, { useState } from "react";
import axios from "axios";

// 리덕스 : 액션실행함수를 손쉽게 호출하도록 useDispatch 참조
import { useDispatch } from "react-redux";

// 리덕스 : 디스패치를 위한 리덕스 액션 실행함수를 참조한다.
import { memberLogin } from "../../redux/actions";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    userpwd: "",
  });

  // 전역데이터 제어용 디스패치 상수 생성
  const globalDispatch = useDispatch();

  // input
  const onLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // 로그인버튼
  const onLogin = () => {
    // step1) 백엔드 로그인 후 사용자 정보와 토큰정보를 가져온다.
    axios
      .post("http://localhost:3005/api/members/login", login)
      .then((result) => {
        console.log("로그인 정보===>", result);

        if (result.data.code === "200") {
          const token = result.data.data;
          console.log("jwt토큰값", token);

          // 토큰값을 웹브라우저 로컬스토리지에 보관하기
          window.localStorage.setItem("jwttoken", token);
          const storageToken = window.localStorage.getItem("jwttoken");
          console.log("브라우저 로컬스토리지에 저장된 토큰:", storageToken);

          // 사용자 토큰 발급 후 백엔드 api 호출시 발급된 jwt 토큰을
          // ajax 헤더에 x-access-token 영역에 기본 포함시켜 백엔드 서비스를 호출하게 한다.
          axios.defaults.headers.common["x-access-token"] = `${token}`;

          // 발급된 토큰값을 전역 데이터에 반영한다.
          // globalDispatch(액션생성함수명(액션생성함수에 전달할 데이터))
          globalDispatch(memberLogin(token));

          alert("로그인 성공");
        } else {
          alert("서버 에러 발생 - 회원로그인");
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
      <input type="password" name="userpwd" value={login.userpwd} onChange={onLoginChange}></input>
      <hr />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
};

export default Login;
