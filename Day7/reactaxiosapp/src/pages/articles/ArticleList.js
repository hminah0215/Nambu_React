import React, { useEffect, useState } from "react";

// useHistory, useLocation 신규 hook 제공
import { Link, useHistory } from "react-router-dom";

import axios from "axios"; // axios 패키지 참조

const ArticleList = () => {
  // history 상수 정의
  const history = useHistory();

  // 1. 화면에 표현할 데이터 구조정의 및 데이터 초기값 세팅

  // 백엔드에서 가져올 게시글 목록 데이터 구조정의
  const [articleList, setArticleList] = useState([]);

  // 게시글 목록 컴포넌트가 최초 1번 렌더링이 완료되면 백엔드에서 게시글목록 조회
  useEffect(() => {
    // 노드 프로젝트에서 게시글목록을 부르는 주소
    // http://localhost:3005/api/articles 이라고 안써도 app.js 에서 axios.defaults.baseURL 지정해놔서 작동함
    axios
      .get("/api/articles")
      .then((res) => {
        console.log("백엔드에서 제공된 전체 게시글목록 데이터 구조 파악", res);

        if (res.data.code === "200") {
          // 게시글 목록 세터함수를 통해 백엔드에서 전달된 json 배열을 데이터로 목록을 갱신한다.
          setArticleList(res.data.data);
        } else {
          alert("백엔드 호출 에러 발생 - 게시글목록");
        }
      })
      .catch((err) => {
        console.error(err);
      });
    //
  }, []); //useEffect 끝

  return (
    <div>
      <h1>게시글 목록 페이지</h1>

      <button
        onClick={() => {
          history.push({ pathname: "/article/regist" });
        }}
      >
        게시글 등록
      </button>

      <table style={{ border: "1px solid" }}>
        <thead>
          <tr>
            <th>글번호</th>
            <th style={{ width: "150px" }}>제목</th>
            <th>조회수</th>
            <th>ip주소</th>
            <th>게시여부</th>
          </tr>
        </thead>

        <tbody>
          {articleList.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link to={`/article/modify/${item.id}`}>{item.title}</Link>
              </td>
              <td>{item.viewcount}</td>
              <td>{item.ipaddress}</td>
              <td>{item.displayyn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
