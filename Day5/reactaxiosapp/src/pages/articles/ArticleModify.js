import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const ArticleModify = () => {
  const history = useHistory();

  // URL 파라메터에서 usermname 값을 추출해서 username에 할당한다.
  // ex: 3
  const { idx } = useParams();

  console.log("id파라메터", idx);

  // 단일 게시글 정보 구조 정의 및 초기화
  const [article, setArticle] = useState({
    title: "",
    contents: "",
    displayyn: "1",
    id: null,
  });

  // 글 제목 입력상자 HTML DOM 제어용 Ref 참조변수 추가
  const titleRef = useRef();

  // 컴포넌트가 최초 렌더링 되면, 그때 포커싱!
  useEffect(() => {
    const url = `http://localhost:3005/api/articles/${idx}`;

    // axios get 수정할 데이터 가져오기
    axios
      .get(url, article)
      .then((result) => {
        console.log("게시글수정 기존게시글 정보===>", result);

        if (result.data.code === "200") {
          // 기존 게시글의 정보가 담긴 곳
          const preArticle = result.data.data;
          setArticle({
            title: preArticle.title,
            contents: preArticle.contents,
            displayyn: preArticle.displayyn,
            id: idx,
          });
        } else {
          alert("백엔드 호출 에러 발생 - 게시글 수정 get");
        }
      })
      .catch((err) => {
        console.error(err);
      });

    // ref 참조를 통해 선택한 게시글의 제목에 포커싱설정
    titleRef.current.focus();
  }, []);

  const onChangeModify = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  // 수정 버튼
  const onModify = () => {
    const url = `http://localhost:3005/api/articles`;

    // axios put 수정
    axios
      .put(url, article)
      .then((result) => {
        console.log("게시글수정 수정한 정보===>", result);
        if (result.data.code === "200") {
          alert("게시글 수정 성공!");

          // 게시글 목록으로 돌아가기
          history.push("/article/list");
        } else {
          alert("백엔드 호출 에러 발생 - 게시글 수정 get");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 삭제 버튼
  const onDelete = () => {
    const url = `http://localhost:3005/api/articles/${idx}`;

    axios
      .delete(url)
      .then((result) => {
        if (result.data.code === "200") {
          alert("게시글 삭제성공!");

          // 게시글 목록으로 돌아가기
          history.push("/article/list");
        } else {
          alert("백엔드 호출 에러 발생 - 게시글 삭제 ");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>게시글 수정 페이지</h1>
      글제목 :
      <input
        type="text"
        name="title"
        value={article.title}
        style={{ width: "30%" }}
        ref={titleRef}
        onChange={onChangeModify}
      />
      <br />
      <br />
      글내용 :
      <textarea
        cols="50"
        rows="20"
        name="contents"
        value={article.contents}
        onChange={onChangeModify}
      ></textarea>
      <br />
      <br />
      게시여부 :
      <select name="displayyn" defaultValue="0" onChange={onChangeModify}>
        <option value="1">게시</option>
        <option value="0">게시안함</option>
      </select>
      <br />
      <br />
      <button onClick={onModify}>수정</button>&nbsp;&nbsp;
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

export default ArticleModify;
