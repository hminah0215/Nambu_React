import React, { useState } from "react";

const Todos = () => {
  // 단일 할일정보 데이터 구조 정의 및 초기값 셋팅
  const [todo, setTodo] = useState({
    title: "",
    order: 0,
  });

  // 할일 목록 : 현재는 해당 컴포넌트에서 관리하지만 추후에는 전역데이터로 이관예정
  const [todoList, setTodoList] = useState([]);

  // input 이벤트, 할일 데이터 바인딩 함수
  const onChangeTodo = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  // 버튼이벤트, 할일 추가 함수
  const onAddTodo = () => {
    // 기존배열의 복사본을 만들고 지정 객체를 새로 추가한다.
    setTodoList(todoList.concat(todo));
  };

  return (
    <div>
      할일이름 :<input type="text" name="title" value={todo.title} onChange={onChangeTodo} />
      <br />
      처리우선순위 :<input type="number" name="order" value={todo.order} onChange={onChangeTodo} />
      <br />
      <button onClick={onAddTodo}>추가하기</button>
      <hr />
      {todoList.map((item, index) => (
        <li key={index}>
          {item.title} --- {item.order}
        </li>
      ))}
    </div>
  );
};

export default Todos;
