import React, { Component } from "react";
import PropTypes from "prop-types";

class Profile extends Component {
  // 자바스크립트 코딩 영역 1
  // 클래스 컴포넌트 전역으로 사용하는 자바스크립트 객체/데이터(state)/이벤트 정의

  render() {
    // 자바스크립트 코딩 영역 2
    // 화면요소(JSX)에서 사용하는 주요 변수 선언영역

    // this.props를 이용해 해당 컴포넌트(this)에 전달된 속성값을 가져와 비구조화 할당방식으로
    // 값을 할당한다.
    const { name, age, telephone, email, children, address } = this.props;

    return (
      <div>
        <h1>{children}</h1>
        <table style={{ width: "500px", height: "50px", border: "1px solid gray" }}>
          <thead></thead>

          <tbody>
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
              <td>주소 - 디폴트 속성이용!</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button>확인</button>
              </td>
            </tr>
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>
    );
  }
}

// props의 새로운 속성을 정의하고(주소) 기본값을 세팅한다.
// 부모에서 정의하지 않고 전달하지 않은 속성의 경우 아래와 같이 정의사용가능하다.
Profile.defaultProps = {
  address: "서울시 뫄뫄구 무무동",
};

// props 속성들에 대한 데이터 형식 체크 및 필수값 여부 체크
// 체크 후 에러가 나면 브라우저 콘솔에서 확인이 가능하다.
Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default Profile;
