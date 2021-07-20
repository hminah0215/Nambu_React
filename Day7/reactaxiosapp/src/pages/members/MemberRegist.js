import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// 각종 유틸리티 함수를 참조한다.
import { getJWTtoken, isMemberLogined, getLoginMember } from "../../helpers/authUtils";

const MemberRegist = () => {
  const history = useHistory();

  // 로그인 여부 체크
  const isLogin = isMemberLogined();
  if (isLogin == false) {
    history.push("/login");
  }

  const [member, setMember] = useState({
    email: "",
    userpwd: "",
    nickname: "",
    entrytype: "1",
    telephone: "",
    username: "",
    photo: "",
  });

  // input 박스 이벤트
  const onMemberChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  // 저장버튼
  const onSave = () => {
    // 회원 정보 저장하기
    // axios post
    axios
      .post("http://localhost:3005/api/members", member)
      .then((result) => {
        console.log("회원등록===>", result);

        if (result.data.code === "200") {
          alert("회원 등록 성공");
          // 회원 목록으로 돌아가기
          history.push("/member/list");
        } else {
          alert("백엔드 에러 발생 - 회원등록");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>회원등록</h1>
      이메일 :
      <input type="text" name="email" value={member.email} onChange={onMemberChange}></input>
      <hr />
      비밀번호 :
      <input type="text" name="userpwd" value={member.userpwd} onChange={onMemberChange}></input>
      <hr />
      닉네임 :
      <input type="text" name="nickname" value={member.nickname} onChange={onMemberChange}></input>
      <hr />
      전화번호 :
      <input
        type="text"
        name="telephone"
        value={member.telephone}
        onChange={onMemberChange}
      ></input>
      <hr />
      이름 :
      <input type="text" name="username" value={member.username} onChange={onMemberChange}></input>
      <hr />
      <button onClick={onSave}>저장</button>
    </div>
  );
};

export default MemberRegist;
