// step1)액션 이름 전역 상수를 참조
import { MEMBER_LOGIN } from "../../constants/actionTypes";
// MEMBER_LOGIN_UPDATE -- 나는 node에서 토큰만 보내니까 안함

//  step2)로그인 액션형식 정의 : 타입스크립트(리덕스자체에서 타입스크립트 문법제공)
type LoginAction = { type: string, payload: {} | string };

//  step3)액션 생성 함수 정의
// 액션생성함수명 = (ui컴포넌트에서 전달되는 json 객체):사용하는 액션객체 => {액션객체정보 세팅}
export const memberLogin = (token: string): LoginAction => ({
  type: MEMBER_LOGIN,
  payload: { token },
});

// 사용자 정보를 전역으로 관리하는 액션생성함수 추가 -- 나는 node에서 토큰만 보내니까 안함
// export const memberLoginUpdate = (member: string): LoginAction => ({
//   type: MEMBER_LOGIN,
//   payload: { member },
// });
