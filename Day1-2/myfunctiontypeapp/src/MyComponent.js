import React from "react";

// rsc 라고 입력하면 스니펫이 함수형 컴포넌트 구조를 만들어줌

// 함수형 컴포넌트 입력 파라메터로 props를 정의하여 부모로부터 전달된 속성값을 받아올 수 있다.
const MyComponent = (props) => {
  return (
    <div>
      {/* 부모 컴포넌트에서 정의한 컨텐츠 내용을 제목으로 표시한다. props.children 사용하기  */}
      <h1>{props.children}</h1>
      <table style={{ width: "500px", height: "50px", border: "1px solid gray" }}>
        <tr>
          <td>이름</td>
          <td>{props.name}</td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>{props.telephone}</td>
        </tr>
        <tr>
          <td>메일주소</td>
          <td>{props.email}</td>
        </tr>
        <tr>
          <td>나이</td>
          <td>{props.age}</td>
        </tr>
        <tr>
          <td>주소 - 디폴트 속성이용!</td>
          <td>{props.address}</td>
        </tr>
        <tr>
          <td colSpan="2">
            <button>확인</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

// defaultProps 정의 속성은 부모에서 해당 속성을 정의하지 않아도
// 자식에서 정의하고 기본값을 세팅할 수 있다.
MyComponent.defaultProps = {
  address: "경기도 성남시......",
};

export default MyComponent;
