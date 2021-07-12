import React, { useState } from "react";

const EventDemo = () => {
  //
  // 사용자 이름을 저장하는 상태값 정의 및 초기값 설정
  const [username, setUserName] = useState("");
  const [email, setUserEmail] = useState("");

  // 텍스트박스의 값이 변경될때마다 호출되는 이벤트 핸들러 함수
  const onChangeUserName = (e) => {
    // 사용자가 입력박스에서 값을 변경할때마다 즉시 해당 UI 요소의 값을 이용
    // setUserName 세터함수에 UI 입력요소값을 전달해서 username 상태값을 반영해준다.
    setUserName(e.target.value);
  };

  // 데이터 저장 처리 이벤트 함수
  const onSave = () => {
    //
    // 백엔드 사용자 정보 저장 API를 호출하고
    // 관련 상태값(username)을 백엔드 JSON 형식으로 전달해서 DB에 영구히 저장한다.
    console.log("브라우저 콘솔에 현재 상태값을 출력함 ==> ", username);
    // alert(username);
  };

  // 사용자 메일정보에 대한 ui요소와 data state간 동기화 처리
  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  // 입력요소에 키보드 키 눌림 이벤트가 발생하면 실행되는 이벤트 처리기 함수
  const onEmailDoubleCheck = (e) => {
    //
    if (e.key === "Enter") {
      alert("키코드는 : " + e.charCode);
      console.log("백엔드 API를 호출해 이메일 주소 중복체크를 실행합니다.");
    }
  };

  // 바인딩 되어 있는 state 값을 초기화하여 입력요소의 값을 초기화 한다.
  const onInit = () => {
    setUserName("");
    setUserEmail("");
  };

  return (
    <div>
      <h1>함수형 컴포넌트 이벤트 실습1</h1>
      <input
        type="text"
        name="username"
        placeholder="이름을 입력해주세요."
        value={username}
        onChange={onChangeUserName}
      />
      <br></br>
      <input
        type="text"
        name="email"
        placeholder="아이디로 사용할 메일주소를 입력해주세요."
        value={email}
        onChange={onChangeEmail}
        onKeyPress={onEmailDoubleCheck}
      />
      <br></br>
      사용자 이름 : {username}
      <br></br>
      <hr />
      <button onClick={onSave}>저장</button>
      <button>수정</button>
      <button onClick={onInit}>초기화</button>
    </div>
  );
};

export default EventDemo;
