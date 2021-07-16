import React, { useEffect, useState } from "react";

// useHistory, useLocation 신규 hook 제공
import { Link, useHistory } from "react-router-dom";

import axios from "axios"; // axios 패키지 참조

const MemberList = () => {
  // history 상수 정의
  const history = useHistory();

  // 백엔드에서 가져올 멤버 목록 데이터 구조정의
  const [memberList, setMemberList] = useState([]);

  // 최초 렌더링시에 회원목록 get
  useEffect(() => {
    const url = `http://localhost:3005/api/members`;
    axios
      .get(url)
      .then((res) => {
        console.log("백엔드에서 제공된 전체 멤버목록 데이터 구조 파악", res);

        if (res.data.code === "200") {
          // 백엔드 회원목록 데이터 바인딩 처리
          setMemberList(res.data.data);
        } else {
          alert("백엔드 호출 에러 발생 - 회원목록");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>회원 목록 페이지</h1>

      <button
        onClick={() => {
          history.push({ pathname: "/member/regist" });
        }}
      >
        회원 등록
      </button>

      <table style={{ border: "1px solid" }}>
        <thead>
          <tr>
            <th>회원번호</th>
            <th style={{ width: "25%" }}>메일주소</th>
            <th>닉네임/본명</th>
            <th>전화번호</th>
            <th>가입상태</th>
            <th>가입일시</th>
          </tr>
        </thead>

        <tbody>
          {memberList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link to={`/member/modify/${item.id}`}>{item.email}</Link>
              </td>
              <td>
                {item.nickname}/{item.username}
              </td>
              <td>{item.telephone}</td>
              <td>{item.userstate}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
