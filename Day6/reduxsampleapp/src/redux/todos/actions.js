// 전역으로 정의한 액션 타입 정보를 참조한다.

// step1) TODO_ADD  액션타입 상수 참조
import { TODO_ADD } from "../../constants/actionTypes";

// step2) todo에서 사용할 액션의 표준화된 기본 형식을 정의한다.
// Todo 전역 데이터 관리를 위한 todo 전용 액션 타입을 정의해서 사용!
// payload 는 액션에서 담을 데이터의 이름을 payload로 지정한것! data나 다른걸로 해도 된다.

// 리덕스 자체에서 설치와 동시에 타입스크립트 기능이 추가 되어서 그럼
type TodoAction = { type: String, payload: {} | string };

// step3) 액션 생성함수 정의
// 액션생성함수는 UI 컴포넌트에서 참조해서 사용할 수 있는 액션생성함수이다.
// 액션생성함수는 UI 컴포넌트에서 호출 할 수 있어야 하기에 export 형식으로 모듈밖으로 관련기능을 노출시켜야 한다.

// addTodoList = (todo:string):TodoAction =>();
// 액션생성함수명 = (UI컴포넌트에서 전달될 data(json 객체로 받는경우 문자열)): TodoAction =>({액션객체세팅하기});
// 액션생성함수는 액션객체만 만들어 주면 된다.
// TodoAction => ({}); TodoAction 형식을 세팅해준다는 뜻

// 액션함수에 전달 파라메터로 할일건수를 전달한다.
// 할일건수는 리듀서 함수로 전달되어 전역데이터 공간에 할일건수 정보만 관리한다.
export const addTodoList = (todoCount: string): TodoAction => ({
  type: TODO_ADD,
  payload: { todoCount },
});

// export const addTodoList = (todo: string): TodoAction => ({
//   type: TODO_ADD,
//   payload: { todo },
// });
