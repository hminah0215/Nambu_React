// 컴포넌트 물리적 파일 이름은 파스칼식 표기법 (대문자로 시작, 중간에도 대문자) 으로 만든다.
// 리액트 패키지를 참조한다
import React from 'react';

// 함수형 컴포넌트 정의방식1
const MyFirstFunctionComponent = () => {
  //
  return <div>내가 만든 첫 함수형 컴포넌트</div>;
};

// 함수형 컴포넌트 정의 방식2
// function MyFirstFunctionComponent() {
//   return <div>내가 만든 첫 함수형 컴포넌트</div>;
// }

// 함수형 컴포넌트 기능 모듈 출력하기
export default MyFirstFunctionComponent;
