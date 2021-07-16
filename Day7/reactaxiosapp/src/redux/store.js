// 리덕스 패키지내에서 제공하는 createStore객체와 compose 객체 참조
import { createStore } from "redux";

// Store에 저장한 리액트 App 내 모든 리듀서 파일 참조
import reducers from "./reducers";

// 스토어 생성 및 환경 구성하기
export function configureStore(initialState) {
  // createStore 생성 기본 방식 1
  // 스토어를 관련정보를 전달해 생성한다.
  // const store = createStore(reducers, initialState);

  // REDUX_DEVTOOLS_EXTENSION 와 연동되는 추가 설정하는 방식 2
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // 생성된 스토어 객체를 반환한다.
  return store;
}
