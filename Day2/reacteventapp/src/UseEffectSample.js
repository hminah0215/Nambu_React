import React, { useState, useEffect, useRef } from "react";

const UseEffectSample = () => {
  const [nickName, setNickName] = useState("");
  const [name, setName] = useState("");

  // name ui 요소를 제어하기 위한 ref 변수 선언
  const nameRef = useRef();

  // 렌더링시마다(화면의 요소나 상태가 바뀔때마다) 실행되는 useEffect 이벤트
  // 클래스형 컴포넌트에 render() 메소드가 호출되는것처럼 동일한 이벤트효과 제공
  useEffect(() => {
    console.log("화면이 다시 렌더링 될때마다 실행되요!");
    console.log({ name, nickName });
  });

  // 최초로 컴포넌트가 호출될때 실행되는 useEffect 이벤트
  useEffect(() => {
    console.log("최초 한 번 컴포넌트가 호출될 때 실행되는 이벤트!");

    // 데이터를 불러오거나 ui 요소에 포커스를 맞출때나 다양하게 사용된다.
    nameRef.current.focus();
  }, []);

  // 특정 데이터(state 값)값이 변경될때마다 실행되는 이벤트
  useEffect(() => {
    console.log("name 스테이트값이 변경되었다!! ");
    // 특정 스테이트 데이터 값이 변경될때를 감지하여 프로그래밍을 구현하고자 할 때
    // 상위카테고리 선택이 바뀌면 해당 하위 카테코기 정보를 조회하는 경우, 기타 등등
  }, [name]);

  // 특정 데이터(state 값)값이 변경될때마다 실행되는 이벤트
  useEffect(() => {
    console.log("nickName 스테이트값이 변경되었다!! ");
    // 특정 스테이트 데이터 값이 변경될때를 감지하여 프로그래밍을 구현하고자 할 때
  }, [nickName]);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onNickNamehange = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      이름 : <input ref={nameRef} type="text" name="name" value={name} onChange={onNameChange} />
      닉네임 : <input type="text" name="nickName" value={nickName} onChange={onNickNamehange} />
    </div>
  );
};

export default UseEffectSample;
