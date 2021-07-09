import React from "react";

// prop-types 참조하여 props 속성들의 데이터 형식 체크하기
import PropTypes from "prop-types";

// 입력 파라메터로 props를 정의하지 않고, 객체를 입력파라메터로 정의하는 방법도 있다.
// 정확하게는 name: name 이런식인데 이름이 동일한건 한번만 써도 됨 (es6문법 설명할때 들음)
const MyComponent2 = ({ name, telephone, email, age }) => {
  return (
    <div>
      <h1>프로필 2</h1>
      <table style={{ width: "500px", height: "50px", border: "1px solid gray" }}>
        <tr>
          <td>이름</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>{telephone}</td>
        </tr>
        <tr>
          <td>메일주소</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>나이</td>
          <td>{age}</td>
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

// 전달되는 props 속성 중 age 속성값은 반드시 숫자형이어야 한다.
// age 값이 숫자형으로 반드시 props로 전달되어야한다.
MyComponent2.propTypes = {
  age: PropTypes.number.isRequired,
};

export default MyComponent2;
