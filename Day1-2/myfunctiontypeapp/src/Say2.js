// useState 훅을 사용하려면 여기에 꼭 넣어줘야함
import React, { useState } from "react";

const Say2 = () => {
  // 색상 텍스트 데이터 정의
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("안녕하세요");

  // 사용자 단일객체 데이터 정의 및 초기화
  const [user, setUser] = useState({
    userName: "min",
    email: "min@aaa.com",
    telephone: "010-123-1212",
  });

  // 입장버튼 클릭 이벤트 처리기 함수
  const onClickEnter = () => {
    setMessage("어서오세요. 환영합니다.");
  };

  // 퇴장버튼 클릭 이벤트 처리기 함수
  const onClickLeave = () => {
    setMessage("안녕히가세요");
  };

  // 사용자 정보 변경처리 이벤트 처리기
  const changeUserInfo = () => {
    // 스프레드 연산자 ... 을 통한 기존 객체의 복사본을 만들고 복사본 내의 특정 속성값을 변경한 후
    // user 객체를 통째로 변경적용한다.
    //setUser({ ...user, email: "spread@aaa.com" });

    // 위의 코드를 더 풀어서 쓰면
    // 기존 객체의 다른 속성값은 유지하면서 특정 속성값만 바꿔서 객체를 변경하고자 할때는
    // spread 연산자 (... ) 을 이용해 복사본을 만들어 기존의 값을 대체한다.
    const newUser = { ...user, emial: "spread.com" };
    setUser(newUser);
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록색
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파란색
      </button>
      <hr />
      이름 :{user.userName} <br></br>
      이메일 : {user.email} <br />
      전화번호 : {user.telephone} <br />
      <button onClick={changeUserInfo}>정보변경</button>
    </div>
  );
};

export default Say2;
