import React, { useState } from "react";

const EventDemo = () => {
  const [username, setUserName] = useState("");

  return (
    <div>
      <h1>함수형 컴포넌트 이벤트 실습1</h1>
      <input type="text" name="username" placeholder="이름을 입력해주세요." value={username} />
      <br></br>
      사용자 이름 : {username}
      <br></br>
      <button>저장</button>
      <button>수정</button>
    </div>
  );
};

export default EventDemo;
