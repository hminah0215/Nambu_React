import React from "react";

import qs from "qs";

// 리액트에서 URL을 QueryString 값으로 쉽게 추출하기 위해
// qs 노드 패키지를 프로젝트에 추가 설치한다.
// yarn add qs

// 회사소개 화면 컴포넌트
// location => url 전체를 가져오는것
const About = ({ location }) => {
  // qs.parse(url내 querystring 문자열을 파싱하여 key값으로 값을 추출할 수 있게 query결과물을 생성한다.)
  // ?test=a&uid=test&stock=3
  // ignoreQueryPrefix가 true이면, 상기 query 문자열에서 '?' 를 제거한다.
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  // query조회결과값이 문자열로 반환된다.
  // ?detail=aaaa
  // showDetail 값은 aaaa 가 된다.
  // query.쿼리키값  을 지정해서 해당값을 추출하고 문자열로 해당값을 받는다.
  // query.detail 값이 없으면 무조건 문자열 true 반환!
  const showDetail = query.detail === "true";
  const qid = query.qid;

  return (
    <div>
      <h1>회사소개</h1>
      <p>회사소개 페이지입니다.</p>
      <p>{showDetail && <p>detail값을 true로 설정했네요~</p>}</p>
      <p>전달파라메터 qid = {qid}</p>
    </div>
  );
};

export default About;
