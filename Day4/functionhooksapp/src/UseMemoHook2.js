import React, { useState } from "react";
// 성능이 떨어짐. UseMemoHook.js 처럼 memo사용하는것이 더 성능이 좋다

// useMemo는 주로 렌더링 발생시마다 실행되는 함수가 아닌
// 특정 데이터가 변경되었을때만 실행되는 함수를 정의하고 사용할때 이용한다.
// 렌더링시마다 정의된 함수의 호출 및 실행이 되면 리액트앱의 성능을 저하시키는 원인이 된다.
// 따라서 재사용가능한 함수기능의 호출을 특정 데이터가 변경되었을때만 호출하고자할때 사용!
// 실제 호출함수를 UI에서 호출하는 경우에서 주로 사용한다.

const getAverage = (numbers) => {
  console.log("평균값 계산하는중 .........");
  if (numbers.length === 0) return 0;

  // 배열의 reduce 메소드는 배열안의 값을 모두 합친 총합의 값을 반환한다.
  const sum = numbers.reduce((a, b) => a + b);

  // 배열의 건수로 총합을 나누어 평균값을 반환한다.
  return sum / numbers.length;
};

// 위는 익명함수+화살표함수를 이용해 평균값구하기, 이건 일반 함수

function getAverage2(numbers) {
  console.log("평균값 계산하는중 .........");
  if (numbers.length === 0) return 0;

  // 배열의 reduce 메소드는 배열안의 값을 모두 합친 총합의 값을 반환한다.
  const sum = numbers.reduce((a, b) => a + b);

  // 배열의 건수로 총합을 나누어 평균값을 반환한다.
  return sum / numbers.length;
}

// ================================================================================================
const UseMemoHook = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChangeData = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input type="text" value={number} onChange={onChangeData} />
      <button onClick={onInsert}>등록</button>
      <hr />
      {list.map((value, index) => (
        <li key={index}> {value} </li>
      ))}

      <hr />
      <div>
        <b>평균값:{getAverage(list)}</b>
      </div>
    </div>
  );
};

export default UseMemoHook;
