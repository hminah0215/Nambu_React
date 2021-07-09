import React, { Component } from "react";

// Component 상속받아서 Say 클래스 컴포넌트 객체가 생성된다.
// Say클래스 컴포넌트 객체가 생성될때 생성자 초기화 함수를 정의할 수 있다.
class Say extends Component {
  // 클래스 생성자 함수
  // 생성자 함수는 해당 컴포넌트가 최초로 생성(객체화=인스턴스화)될때 실행해주는 함수
  // Say 컴포넌트가 만들어질때 딱 한번 실행되는 함수
  // 생성자 함수 호출시 반드시 super 메소드를 호출해줘서 부모클래스에 props를 전달해줘야한다.
  constructor(props) {
    //
    // super메소드는 부모 클래스인 Component클래스내에 정의된 함수로 super클래스에
    // props를 전달하여 부모클래스에서 정의된 기능과 속성에 props를 전달한다.
    super(props);

    // 클래스형 컴포넌트에서의 state 사용할때 생성자 내에서 state를 정의하는 방법 1

    // 컴포넌트에서 사용할 데이터 구조 정의
    // 클래스형 컴포넌트의 state는 this.state내에 모든 데이터 구조를 정의한다.
    this.state = {
      number: 0,

      user: {
        email: "jin@a.com",
        age: 25,
        userId: "jin",
        userName: "진",
      },

      message: "",
    };
  }

  // 감소 버튼 클릭시 이벤트 처리기 함수 정의
  onDecrease = () => {
    // 숫자 감소시키기
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    // 비구조화 할당으로 JSX에서 사용할 변수/객체 데이터 할당
    const { number, user, message } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h1>{this.state.number}</h1>

        {/* 이벤트 처리기 함수를 정의하지 않고 이벤트 발생시 바로 화살표 함수를 통해 이벤트를 처리한다. */}
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          증감1
        </button>

        {/* 이벤트 처리기 함수를 별도로 정의하고 호출해서 사용하는 경우  */}
        <button onClick={() => this.onDecrease()}>감소1</button>
      </div>
    );
  }
}

export default Say;
