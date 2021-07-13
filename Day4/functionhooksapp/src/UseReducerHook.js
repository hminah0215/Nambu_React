import React, { useReducer } from "react";

// UseReducer 훅은 useState와 동일하게 데이터 상태관리를 목적으로하며
// 상태관리 및 처리 영역을 별도의 reducer 함수를 정의해서 처리하고
// 함수형 컴포넌트 외부에서 정의하기에 해당 리듀서 함수의 재사용이 가능하다.
// useState는 해당 컴포넌트내에서만 사용이 가능하지만 useReducer 함수는 여러 컴포넌트에서
// 사용이 가능하다.
// 리듀서 함수의 액션기능을 이용해서 하나의 함수에서 여러 속성의 조건별 상태값 관리가 가능함.

//
// 함수형 컴포넌트 밖에 리듀서 함수 정의
// 리듀서 함수 (상태값,액션함수) {}
// 리듀서 함수의 Action의 type을 이용해서 상태값을 반환받는데,
// useState를 이용하여 개별로 세터함수를 정의하는 것보다는 다양한 케이스별로 상태값 처리가 가능하다.
function counterReducer(state, action) {
  // 액션의 유형별로 상태값을 구분하여 전달할 수 있다.
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "INIT":
      return { value: 0 };
    case "PLUS1000":
      return { value: state.value + 1000 };
    // 다양한 케이스별로 상태값에 비지니스로직을 적용하고 싶을때 switch - case 사용
    case "DIVIDE":
      return { value: state.value / 2 };
    default:
      return state;
  }
}

// 사용자 정보관리 리듀서 함수
// 화면 입력요소의 값을 조건별로 초기화하거나 입력요소 유형에 따른 state 값을 제어하는 다양한 케이스별로
// user정보를 관리한다.
function userReducer(state, action) {
  switch (action.type) {
    case "init":
      return { ...state, userid: "", username: "", email: "", isadmin: false };
    case "text":
      return { ...state, [action.name]: action.value }; // 텍스트박스의 onChange 까지 다 처리
    case "checkbox":
      return { ...state, [action.name]: action.checked }; // 입력요소가 체크박스인 케이스
    case "changeadmin":
      return { ...state, isadmin: true };
    default:
      return state;
  }
}

const UseReducerHook = () => {
  // const[상태명, 리듀서함수 실행처리명령어] = useReducer(리듀서함수, 초기값설정)
  const [counter, dispatchCounter] = useReducer(counterReducer, { value: 0 });

  // 사용자 정보관리 userReducer 정의
  const [user, dispatchUser] = useReducer(userReducer, {
    userid: "",
    username: "",
    email: "",
    isadmin: false,
  });

  const onChangeUser = (e) => {
    // 리듀서 함수를 실행시킨다.
    dispatchUser(e.target); // INPUT 요소의 type이 action값으로 넘어간다.
  };

  const onSave = () => {};

  const onInit = () => {
    dispatchUser({ type: "init" });
  };

  return (
    <div>
      <p>
        현재 카운터 값은 : <b>{counter.value}</b>
      </p>
      {/* 리듀서 dispatch 함수명은 세팅된 리듀서 함수를 호출할 때 사용한다. 
      dispatch함수명에 파라메터로 action type 속성의 값을 지정해 전달할 수 있다.*/}
      <button onClick={() => dispatchCounter({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatchCounter({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatchCounter({ type: "INIT" })}>초기화</button>
      <button onClick={() => dispatchCounter({ type: "PLUS1000" })}>1000+</button>
      <button onClick={() => dispatchCounter({ type: "DIVIDE" })}>2로나누기</button>
      <hr />
      사용자 아이디: <input type="text" name="userid" value={user.userid} onChange={onChangeUser} />
      사용자 이름:
      <input type="text" name="username" value={user.username} onChange={onChangeUser} />
      사용자 이메일: <input type="text" name="email" value={user.email} onChange={onChangeUser} />
      관리자여부:
      <input type="checkbox" name="isadmin" checked={user.isadmin} onChange={onChangeUser} />
      <button onClick={onSave}>저장</button>
      <button onClick={onInit}>초기화</button>
      <button onClick={() => dispatchUser({ type: "changeadmin" })}>관리자로변경하기</button>
    </div>
  );
};

export default UseReducerHook;
