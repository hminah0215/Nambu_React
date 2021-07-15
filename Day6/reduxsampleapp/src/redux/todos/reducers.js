// 전역으로 정의한 액션 타입 정보를 참조한다.

// step1) TODO_ADD  액션타입 상수 참조
import { TODO_ADD } from "../../constants/actionTypes";

// step2) 리듀서 함수에서 사용할 전역 데이터의 구조정의 및 값 초기화
const INIT_STATE = {
  todoCount: 0,
  todoList: [],
};

// step3) 액션의 표준화된 기본 형식을 정의한다.
// Todo 전역 데이터 관리를 위한 todo 전용 액션 타입을 정의해서 사용!
type TodoAction = { type: string, payload: {} | string };

// todoCount가 비어있으면 0 또는 null값, todoList도 값이 전달안되면 빈배열을 집어넣는다는 뜻
// 초기값 세팅 영역
type State = { todoCount?: 0 | null };

// step4) 리듀서 함수 정의 및 기능 구현
// 리듀서함수명 = (state: 전역데이터 구조 정의 및 초기값 세팅하기 = INIT_STATE, action: 리듀서에서 사용하는 액션함수) =>{액션타입별 기능정의}
// 리듀서 함수에 전달되는 데이터는 정의할 객체구조 및 초기화 세팅, 액션타입)
// 리듀서함수(state:전역데이터구조정의 타입 및 초기화 객체, action: 맵핑되는 액션타입)

// 할일 건수만 전역으로 관리하는 리듀서 함수
const ToDo = (state: State = INIT_STATE, action: TodoAction) => {
  switch (action.type) {
    case TODO_ADD:
      // todoCount를 관리하는 전역 state의 복사본을 만들고 안에 todoCount 속성값을 action에서 전달된 count값으로 업데이트한다.
      return { ...state, todoCount: action.payload.todoCount };

    default:
      return { ...state };
  }
};

// Todo 리듀서 함수를 노출한다.
export default ToDo;
