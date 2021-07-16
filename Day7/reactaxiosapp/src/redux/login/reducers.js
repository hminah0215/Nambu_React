// step1) 액션타입 상수 참조
import { MEMBER_LOGIN } from "../../constants/actionTypes";
// MEMBER_LOGIN_UPDATE -- 나는 node에서 토큰만 보내니까 안함

// step2) 리듀서 함수에서 사용할 전역 데이터의 구조정의 및 값 초기화
const INIT_STATE = {
  token: "",
  loginUser: {},
};

// step3) 해당 리듀서 함수에서 사용할 액션타입 정의
type LoginAction = { type: string, payload: {} | string };

// step4) 리듀서 함수 기능정의
// 리듀서함수명 = (state:리듀서함수에서 관리하는 전역데이터 정의 및 초기화 ,action:관련액션객체) => {액션이름별 전역데이터 수정}
const Login = (state: INIT_STATE, action: LoginAction) => {
  switch (action.type) {
    case MEMBER_LOGIN:
      return { ...state, token: action.payload.token };
    // case MEMBER_LOGIN_UPDATE: -- 나는 node에서 토큰만 보내니까 안함
    //   return { ...state, loginUser: action.payload.member };
    default:
      return { ...state };
  }
};

// step5) 리듀서 함수 노출
export default Login;
