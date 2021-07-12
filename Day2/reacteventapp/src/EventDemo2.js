import React, { useState } from "react";

const EventDemo2 = () => {
  //
  // 사용자 정보관리 state 정의 및 초기화
  const [user, setUser] = useState({
    userid: "",
    username: "",
    email: "",
    telephone: "",
    address: "",
  });

  // 데이터 처리결과 표시용 데이터 정의
  const [resultMsg, setResultMsg] = useState("");

  // 사용자 입력폼 요소에서 전달된 데이터를 user state의 각 속성에 데이터 바인딩 처리한다.
  // 멀티 UI 요소와 STATE 속성에 대한 바인딩 처리
  const onChangeUserInfo = (e) => {
    //
    // spread 연산자를 이용한 객체 데이터 수정
    // e.target.name 은 아래 html 태그의 name 속성을 말함
    const newUser = { ...user, [e.target.name]: e.target.value };
    // setUser({ ...user, username: e.target.value });
    setUser(newUser);
  };

  // 사용자 정보 저장 이벤트 처리 함수
  const onSave = () => {
    // 백엔드 API로 user 단일객체를 전송하고 저장한다.
    console.log("현재 사용자 데이터 : ", user);

    // 처리결과 표시
    setResultMsg("저장완료");
  };

  return (
    <div>
      <h1>회원가입 폼</h1>

      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>회원아이디</td>
            <td>
              {/* 입력요소의 name 특성값을 반드시 바인딩되는 객체의 속성명으로 지정한다. */}
              <input type="text" name="userid" value={user.userid} onChange={onChangeUserInfo} />
            </td>
          </tr>

          <tr>
            <td>회원이름</td>
            <td>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={onChangeUserInfo}
              />
            </td>
          </tr>

          <tr>
            <td>이메일</td>
            <td>
              <input type="text" name="email" value={user.email} onChange={onChangeUserInfo} />
            </td>
          </tr>

          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="text"
                name="telephone"
                value={user.telephone}
                onChange={onChangeUserInfo}
              />
            </td>
          </tr>

          <tr>
            <td>주소</td>
            <td>
              <input type="text" name="address" value={user.address} onChange={onChangeUserInfo} />
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <button onClick={onSave}>저장</button>
            </td>
          </tr>

          <tr>
            <td colSpan="2">{resultMsg}</td>
          </tr>
        </tbody>
      </table>

      {/* <button onClick={onConfirmData}>확인</button> */}
    </div>
  );
};

export default EventDemo2;
