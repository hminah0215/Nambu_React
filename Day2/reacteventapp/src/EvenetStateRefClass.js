import React, { Component } from "react";

class EvenetStateRefClass extends Component {
  // Step1. state를 통해 데이터 구조를 정의하고 초기값을 설정한다.
  // 하나의 state안에 해당 컴포넌트내의 모든 데이터 구조를 표현한다.
  state = { userid: "", username: "", telephone: "" };

  // 클래스형에서는 const 없이 함수 처리기 기능 구현
  onUserChange = (e) => {
    // 클래스형 컴포넌트에서는 setState 세터함수 하나만을 이용해서 정보를 갱신한다.
    this.setState({ [e.target.name]: e.target.value });
  };

  // 저장버튼
  saveUser = () => {
    console.log("등록된 사용자 정보", this.state);

    // ref를 이용한 포커싱하기 (사용법1)
    this.useridRef.current.focus();

    // 직접 정의한 ref는 current를 사용하지 않고 직접 사용(사용법2)
    this.usernameRef.focus();
  };

  // Ref 사용방법 1 : 직접 ref 요소를 정의하는 방법
  useridRef = React.createRef();

  render() {
    return (
      <div>
        userid :
        <input
          ref={this.useridRef}
          type="text"
          name="userid"
          value={this.state.userid}
          onChange={this.onUserChange}
        />
        <br />
        {/* Ref 사용방법 2 : input 요소안에 직접 정의하는 방법  */}
        username :
        <input
          ref={(ref) => {
            this.usernameRef = ref;
          }}
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onUserChange}
        />
        <br />
        telephone :
        <input
          type="text"
          name="telephone"
          value={this.state.telephone}
          onChange={this.onUserChange}
        />
        <br />
        <button onClick={this.saveUser}>저장</button>
      </div>
    );
  }
}

export default EvenetStateRefClass;
