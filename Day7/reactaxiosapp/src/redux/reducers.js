import { combineReducers } from "redux";

// 업무별 폴더에 저장된 여러 리듀서 함수를 참조하고 통합할 수 있다.
import Login from "./login/reducers";

// 각종 리듀서 함수를 통합해서 외부로 공유한다.
export default combineReducers({ Login });
