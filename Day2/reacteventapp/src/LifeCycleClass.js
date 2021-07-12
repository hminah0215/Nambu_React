import React, { Component } from "react";

class LifeCycleClass extends Component {
  // 생성자 함수, 컴포넌트가 생성될 때 최초 한번 실행
  constructor(props) {
    super(props);
    console.log("1.생성자 함수 호출 ===========> ");
  }

  // props 값으로 state 값을 변경코자 할 때 사용할 수 있는 이벤트,
  // 부모 컴포넌트에서 전달된 props 속성으로 state 값을 변경할때는 이 이벤트에서 처리 해야한다.
  static getDrivedStateFromProps(nextProps, prevState) {
    console.log("2.getDrivedStateFromProps 이벤트 호출 =============> ");
    return null;
  }

  // 컴포넌트 내용이 최초 화면에 마운트(렌더링이) 완료되는 경우
  // 주로 화면 ui가 모두 렌더링 완료되는 시점에서 백엔드 데이터를 호출하는 경우 주로 사용한다.
  componentDidMount() {
    console.log("componentDidMount", "최초에 한번 컴포넌트가 마운트 될때 실행된다!! ");
  }

  // 컴포넌트내에 props나 state가 바뀔때 마다 실행되는 생애주기 이벤트
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", "state,props 값이 변경될때마다 실행되는 이벤트");

    // 조건식결과 특정 조건이면 해당 props, state 값의 변경을 return false하여 변경을 취소할 수 있다.
    return true;
  }

  // 컴포넌트가 언마운트(화면에서 사라지는) 되기 바로 전에 실행된다.
  componentWillUnmount() {
    console.log("componentWillUnmount !!!");
  }

  // 컴포넌트 업데이트가 완료된 이후에 발생하는 이벤트
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate !!");
  }

  render() {
    console.log("render() 메소드, html요소내 state가 변경될때마다 호출됨!!! ");

    return (
      <div>
        <h1>안녕하세요.</h1>
        <button>확인</button>
      </div>
    );
  }
}

export default LifeCycleClass;
