// 리덕스 패키지내에서 제공하는 createStore객체와 compose 객체 참조
import { createStore, compose } from "redux";

// Store에 저장한 리액트 App 내 모든 리듀서 파일 참조
import reducers from "./reducers";

// 스토어 생성 및 환경 구성하기
export function configureStore(initialState) {
  // 스토어를 관련정보를 전달해 생성한다.
  const store = createStore(reducers, initialState);

  // 생성된 스토어 객체를 반환한다.
  return store;
}
