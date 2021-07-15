import React, { useState } from "react";

const Counter = () => {
  const [todoCount, setTodoCount] = useState(0);

  return (
    <div>
      <h1>할일 건수 : {todoCount}</h1>
      <br />
      <br />
    </div>
  );
};

export default Counter;
