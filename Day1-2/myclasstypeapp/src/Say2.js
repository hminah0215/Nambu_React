import React, { Component } from "react";

class Say2 extends Component {
  //
  state = {
    number: 0,
  };

  render() {
    return (
      <div>
        {this.state.number}

        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          증가
        </button>
      </div>
    );
  }
}

export default Say2;
