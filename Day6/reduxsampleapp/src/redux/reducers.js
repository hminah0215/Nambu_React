// 업무별로 생성한 각종 리듀서 파일을 하나의 리듀서파일로 통합한다.

// 각종 리듀서 파일을 통합해주는 combineReducers 함수를 참조한다.
import { combineReducers } from "redux";

// redux/todos/reducers.js 파일에서 노출한 ToDo 리듀서 함수를 참조한다.
import ToDo from "./todos/reducers";

//import Login from "./login/reducers";

// 각종 리듀서 함수를 통합해서 외부로 공유한다.
export default combineReducers({ ToDo });
// export default combineReducers({ ToDo,Login });
