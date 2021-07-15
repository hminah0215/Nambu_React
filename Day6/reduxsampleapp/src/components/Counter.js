import React, { useState } from "react";

// 리덕스 : 구독을 위한 useSelector 훅을 참조한다.
import { useSelector } from "react-redux";

const Counter = () => {
  // const [todoCount, setTodoCount] = useState(0);

  // 전역 데이터 저장소에 있는 todoCount 속성값을 조회한다.
  // 전역 데이터 저장소의 값을 접근하기 위해서는
  // useSelector((전역저장소 접근자) => 전역저장소접근자.리듀서함수에서 정의한 객체 속성 호출 )
  const todoCnt = useSelector((state) => state.ToDo.todoCount);

  return (
    <div>
      <h1>할일 건수 : {todoCnt}</h1>
      <br />
      <br />
    </div>
  );
};

export default Counter;
