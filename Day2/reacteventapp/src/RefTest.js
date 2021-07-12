import React, { useRef, useState } from "react";

const RefTest = () => {
  // 화면이 로드될 때 마우스 포커스를 userid 텍스트박스에 두고 싶음

  const [user, setUser] = useState({ userid: "", username: "" });

  // userid 텍스트박스를 제어하기 위한 html DOM 참조변수 선언하기
  const useridRef = useRef();

  const onConfirm = () => {
    // 참조된 ui 요소에 html포커싱 처리 하기
    // 순수 자바스크립트로 html DOM을 제어하는것처럼 Ref를 이용해 html 제어 가능
    useridRef.current.value = "테스트입니다.";
    useridRef.current.focus();
  };

  return (
    <div>
      {/* Ref 속성에 위에서 정의한 html DOM 참조 변수를 할당한다.  */}
      아이디 : <input type="text" ref={useridRef} name="userid" value={user.userid} />
      <button onClick={onConfirm}>확인하기</button>
    </div>
  );
};

export default RefTest;
