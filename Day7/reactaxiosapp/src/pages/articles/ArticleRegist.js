import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ArticleRegist = () => {
  const history = useHistory();

  // 단일 게시글 정보 구조 정의 및 초기화
  const [article, setArticle] = useState({
    title: "",
    contents: "",
    displayyn: "1",
  });

  // 글 제목 입력상자 HTML DOM 제어용 Ref 참조변수 추가
  const titleRef = useRef();

  // 컴포넌트가 최초 렌더링 되면, 그때 포커싱!
  useEffect(() => {
    // ref 참조를 통해 선택한 게시글의 제목에 포커싱설정
    titleRef.current.focus();
  }, []);

  // 입력요소와 useState간 데이터 바인딩 적용 (MVVM)
  const onChangeRegist = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  // 게시글 등록버튼
  const onSave = () => {
    if (article.title.length === 0 || article.contents.length === 0) {
      alert("게시글 제목과 내용을 입력해주세요!");
      return false;
    }

    // axios post
    axios
      .post("http://localhost:3005/api/articles", article)
      .then((result) => {
        console.log("게시글등록===>", result);

        if (result.data.code === "200") {
          alert("게시글 등록 성공");
          // 게시글 목록으로 돌아가기
          history.push("/article/list");
        } else {
          alert("백엔드 에러 발생 - 게시글등록");
        }
      })
      .catch((err) => {
        console.err(err);
      });
  };

  return (
    <div>
      <h1>게시글 등록 페이지</h1>
      글제목 :
      <input
        type="text"
        name="title"
        value={article.title}
        style={{ width: "30%" }}
        ref={titleRef}
        onChange={onChangeRegist}
      />
      <br />
      <br />
      글내용 :
      <textarea
        cols="50"
        rows="20"
        name="contents"
        value={article.contents}
        onChange={onChangeRegist}
      ></textarea>
      <br />
      <br />
      게시여부 :
      <select name="displayyn" defaultValue="0" onChange={onChangeRegist}>
        <option value="1">게시</option>
        <option value="0">게시안함</option>
      </select>
      <br />
      <br />
      <button onClick={onSave}>등록</button>
    </div>
  );
};

export default ArticleRegist;
