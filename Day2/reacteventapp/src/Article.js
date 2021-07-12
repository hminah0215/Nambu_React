import React, { useState, useRef } from "react";

const Article = () => {
  // STEP 1. 데이터 구조를 정의하고 초기화한다.

  // 단일 게시글 정보 구조 정의 및 초기화
  const [article, setArticle] = useState({
    idx: 0,
    title: "",
    writer: "",
    contents: "",
    viewcount: 0,
    isdisplay: true,
    registdate: new Date().toLocaleString(),
  });

  // 게시글 목록 정의
  const [articleList, setArticleList] = useState([]);

  // 데이터 저장 모드
  const [saveMode, setSaveMode] = useState("C");

  // 글 제목 입력상자 HTML DOM 제어용 Ref 참조변수 추가
  const titleRef = useRef();

  // ==========================================================================================
  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onSelectItem = (i, item, itemIdx) => {
    // 뷰카운트 추가
    item.viewcount = item.viewcount + 1;
    // 저장모드 수정모드로 세팅
    setSaveMode("M");
    // 선택한 게시글을 기본 게시글로 설정
    setArticle(item);

    // ref 참조를 통해 선택한 게시글의 제목에 포커싱설정
    // titleRef.currens는 html dom ref 요소를 말한다.
    titleRef.current.focus();
  };

  const onSave = () => {
    // 배열 건수 +1로 게시글 고유 번호 임시 세팅
    article.idx = articleList.length + 1;
    article.registdate = new Date().toLocaleString();

    if (article.title.length === 0) {
      alert("게시글 제목을 입력해주세요!");
      return false;
    }
    // array concat()을 사용하지 않고, 전개 연산자를 사용해 배열에 신규 객체를 바로 추가하는 문법 적용
    setArticleList([...articleList, article]);
  };

  const onModify = () => {
    // 현재 선택된 게시글 고유 번호를 조회한다.
    // 현재 게시글 목록을 반복해서 개별 아이템과 현재 선택된 아이템의 고유번호가 같은지 아닌지를 비교한다.
    // 같으면 현재 비교하는 아이템의 복사본을 만들고 현재 입력한 게시글의 정보로 속성값을 변경하고
    // 고유번호가 다른 것들은 그냥 기존 아이템 값을 반환한다.
    const currentArticleIdx = article.idx;
    // 게시글 목록글을 일괄 업데이트하는 세터함수 호출
    setArticleList(
      articleList.map((item) =>
        item.idx === currentArticleIdx
          ? {
              ...item,
              title: article.title,
              contents: article.contents,
              writer: article.writer,
            }
          : item
      )
    );
  };

  const onDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const filteredList = articleList.filter((item) => item.idx !== article.idx);
      // 게시글 목록 삭제데이터 제거 후 다시 바인딩 해줌
      setArticleList(filteredList);
      // 게시글 데이터 초기화
      setArticle({
        idx: 0,
        title: "",
        writer: "",
        contents: "",
        viewcount: 0,
        isdisplay: true,
        registdate: new Date().toLocaleString(),
      });
      // 삭제 후 등록모드로 전환
      setSaveMode("C");
    }
  };

  return (
    <div>
      {/* STEP 2. 화면을 구성한다. */}

      {/* 데이터 입력 영역 */}
      <div>
        <table style={{ width: "90%" }}>
          <tbody>
            <tr>
              <td style={{ width: "150px" }}>제목</td>
              <td>
                <input
                  type="text"
                  name="title"
                  value={article.title}
                  style={{ width: "100%" }}
                  onChange={(e) => onArticleChange(e)}
                  ref={titleRef}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: "150px" }}>글쓴이</td>
              <td>
                <input
                  type="text"
                  name="writer"
                  value={article.writer}
                  style={{ width: "100%" }}
                  onChange={(e) => onArticleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: "150px" }}>글내용</td>
              <td>
                <textarea
                  cols="20"
                  rows="10"
                  name="contents"
                  value={article.contents}
                  style={{ width: "100%" }}
                  onChange={(e) => onArticleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: "150px" }}>뷰카운트</td>
              <td>{article.viewcount}</td>
            </tr>
            <tr>
              <td style={{ width: "150px" }}>등록일시</td>
              <td>{article.registdate}</td>
            </tr>

            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <button onClick={onSave}>등록</button>
                <button onClick={onModify}>수정</button>
                <button onClick={onDelete}>삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 데이터 목록 영역 */}
      <div>
        <table style={{ width: "90%" }}>
          <thead>
            <tr>
              <th>글번호</th>
              <th width="*">글제목</th>
              <th width="20%">글내용</th>
              <th>뷰카운트</th>
              <th>게시여부</th>
              <th>글쓴이</th>
              <th>등록일시</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            {articleList.map((item, i) => (
              <tr key={item.idx}>
                <td>{item.idx}</td>
                <td>{item.title}</td>
                <td>{item.contents}</td>
                <td>{item.viewcount}</td>
                <td>{item.isdisplay}</td>
                <td>{item.writer}</td>
                <td>{item.registdate}</td>
                <td>
                  <button onClick={() => onSelectItem(i, item, item.idx)}>선택</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Article;
