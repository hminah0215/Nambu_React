import React, { useState } from "react";

// 리덕스 : 액션실행함수를 손쉽게 호출하기 위한 useDispatch 훅을 참조한다.
import { useDispatch } from "react-redux";

// 리덕스 : 디스패치를 위한 리덕스 액션실행함수를 참조한다.
import { addTodoList } from "../redux/actions";

const Todos = () => {
  // 단일 할일정보 데이터 구조 정의 및 초기값 셋팅
  const [todo, setTodo] = useState({
    title: "",
    order: 0,
  });

  // 할일 목록 : 현재는 해당 컴포넌트에서 관리하지만 추후에는 전역데이터로 이관예정
  const [todoList, setTodoList] = useState([]);

  // 전역데이터 제어용 디스패치 상수 생성
  const globalDispatch = useDispatch();

  // input 이벤트, 할일 데이터 바인딩 함수
  const onChangeTodo = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  // 버튼이벤트, 할일 추가 함수
  const onAddTodo = () => {
    // 기존배열의 복사본을 만들고 지정 객체를 새로 추가한다.
    setTodoList(todoList.concat(todo));

    // console.log("추가된 할일 카운트: ", todoList.length); 0부터 카운트 됨

    // 전역 할일목록 카운트 정보에 액션생성함수를 호출하여 전역 카운트를 갱신시킨다.
    // globalDispatch를 이용해 참조한 addToDoList()액션생성 함수를 호출한다.
    // addToDoList 액션함수 호출시 액션에 전달할 데이터인 할일목록 건수를 전달한다.
    globalDispatch(addTodoList((todoList.length + 1).toString()));
    // 콘솔에 찍어보니 0부터 카운트 되어서 +1 함
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
