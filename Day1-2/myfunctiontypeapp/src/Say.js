import React, { useState } from "react";

// 함수형 컴포넌트 에서 state 관리를 위해서는 useState를 참조한다.

const Say = (props) => {
  // message란 데이터 관리용 state를 정의하고 초기값으로 빈공백을 할당하며
  // message값을 변경해주는 SetMessage함수를 정의한다.
  const [message, SetMessage] = useState("");

  // 단일 사용자 정보를 관리하는 state 구조를 정의하고 기본값을 할당하며
  // 관련객체를 수정하는 SetUser라는 함수를 미리 정의한다.
  const [user, SetUser] = useState({
    userId: "tiger",
    userName: "호랭이",
    telephone: "010-123-4566",
    email: "tiger@a.com",
    age: 20,
  });

  // 확인버튼 클릭했을때 실행될 onClick 이벤트처리기(핸들러) 함수 정의
  // 해당 이벤트 처리기는 message의 값의 특정값으로 변경한다.
  // 변경하는 방법은 state에 정의된 state 변경함수에 값을 전달하면 됨!
  const onConfirmMessage = () => {
    SetMessage("사용자가 데이터를 입력했습니다.");
  };

  // 사용자 데이터 초기화 이벤트 핸들러함수
  const onInitUserData = () => {
    SetUser({
      userId: "",
      userName: "",
      telephone: "",
      email: "",
      age: null,
    });
    SetMessage("사용자 데이터가 초기화 되었습니다.");
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.children}</h4>

      <table style={{ width: "500px", height: "50px", border: "1px solid gray" }}>
        <tr>
          <td>이름</td>
          <td>{user.userName}</td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>{user.telephone}</td>
        </tr>
        <tr>
          <td>메일주소</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>나이</td>
          <td>{user.age}</td>
        </tr>
        <tr>
          <td>아이디</td>
          <td>{user.userId}</td>
        </tr>
        <tr>
          <td colSpan="2">
            <button onClick={onConfirmMessage}>확인</button>
            <button onClick={onInitUserData}>화면초기화</button>
            {message}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Say;
