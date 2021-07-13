import React, { useState, useEffect, useRef } from "react";

// UseEffect 훅은 함수형 컴포넌트에서의 컴포넌트 생애주기 및 데이터(state) 변경 감지
// 이벤트 기능을 제공한다.
const UseEffectHook = () => {
  // state와 setter 함수명은 달라도 된다.
  // 그렇지만 다르고 state가 많아지면 헷갈리겠지!?
  const [testString, setTest] = useState("테스트1");

  // DOM을 참조할 상수를 선언한다.
  const testRef = useRef();

  const [testString1, setTest1] = useState("테스트2");

  const onTestChange = (e) => {
    // 값을 변경 적용한다.
    setTest(e.target.value);
  };

  // 컴포넌트의 상태가 (state,layout,html) 변경될때마다 호출됨.
  useEffect(() => {
    console.log("컴포넌트의 상태(state.jsx,html)가 변경될때마다 호출됩니다. ");
  });

  // 해당 컴포넌트가 최초 호출될때 한번만 실행,
  // 해당 컴포넌트가 최초 로드되면 이후 컴포넌트가 화면에서 사라질때까지 실행되지 않는다.
  // 화면 로드완료 후 커서 포커싱이나 백엔드 데이터 조회 후 state 값을 채워준다거나 하는 경우 주로 사용
  useEffect(() => {
    console.log("해당 컴포넌트가 최초 호출될 때 1회만 실행된다. ");

    // 화면이 최초 로딩될때 지정 입력요소에 포커싱을 지정한다.
    // testRef.current는 최종 브라우저에 렌더링된 input tag 요소임
    testRef.current.focus();
    testRef.current.style.background = "red";
  }, []);

  // 지정된 state 값이 변경될때마다 실행된다.
  // UI 요소와 바인딩된 특정 state  값이 변경될때 로직을 적용하거나 백엔드에서 데이터를 호출하거나 하는 경우 주로 사용
  useEffect(() => {
    console.log("지정된 state 값이 변경될때마다 실행된다.00000");
  }, [testString, testString1]);
  useEffect(() => {
    console.log("지정된 state 값이 변경될때마다 실행된다.11111");
  }, [testString1]);

  return (
    <div>
      <input ref={testRef} type="text" value={testString} onChange={onTestChange} />
    </div>
  );
};

export default UseEffectHook;
