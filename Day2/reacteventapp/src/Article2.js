import React, { useState } from "react";

const Article = () => {
  // step1. 데이터 구조를 정의한다.

  // 단일게시글 정보 구조 정의 및 초기화
  const [article, setArticle] = useState([
    {
      idx: 0,
      title: "",
      writer: "",
      contents: "",
      viewCount: 0,
      isdisplay: true,
      registdate: new Date().toLocaleString(),
    },
  ]);

  // 게시글 목록 정의
  const [articleList, setArticleList] = useState([]);

  // 데이터 저장모드
  const [saveMode, setSaveMode] = useState("C");

  // step3. 이벤트 처리

  // 입력요소 데이터 바인딩 처리
  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onSelectItem = (i, item, itemIdx) => {
    // 조회수 증가
    item.viewCount = item.viewCount + 1;

    // 저장 모드를 수정모드로 세팅
    setSaveMode("M");

    // 선택한 게시글을 기본 게시글로 설정
    setArticle(item);
  };

  // 저장버튼
  const onSave = () => {
    // 배열 건수 +1로 게시글 고유 번호를 임시 세팅
    article.idx = articleList.length + 1;
    article.registdate = new Date().toLocaleString();

    if (article.title.length === 0) {
      alert("게시글 제목을 입력해주세요.");
      return false;
    }

    // array concat을 사용하지 않고, array spread 연산자를 이용해 배열에 신규 객체를 바로 추가하기 문법 적용
    setArticleList([...articleList, article]);
  };

  // 수정버튼
  const onModify = () => {
    // 현재 선택된 게시글 고유 번호를 조회한다.
    const currentArticleIdx = article.idx;

    // 현재 게시글 목록을 반복해서 개별 아이템과 현재 선택된 아이템 고유번호가 같은지 아닌지를 비교한다
    // 같으면 현재 비교하는 item의 복사본을 만들고, 현재 입력한 게시글의 정보로 속성값을 변경하고
    // 고유번호가 다른 것들은 그냥 기존 item 값을 반환한다.
    setArticleList(
      // 배열안의 단일아이템을 끄집어내서 현재 선택된 게시글의 고유번호랑 꺼내온 아이템의 번호가 같으면 새로운 아이템을 던져줌
      articleList.map((item) =>
        item.idx === currentArticleIdx
          ? { ...item, title: article.title, contents: article.contents, writer: article.writer }
          : item
      )
    );
    // setArticleList 게시글 목록을 일괄 업데이트 하는 세터함수 호출

    //
  };

  // 삭제버튼
  const onDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const filteredList = articleList.filter((item) => item.idx !== article.idx);

      // 게시글 목록 삭제 데이터 제거 후 재바인딩
      setArticleList(filteredList);

      // 게시글 데이터 초기화
      setArticle({
        idx: 0,
        title: "",
        writer: "",
        contents: "",
        viewCount: 0,
        isdisplay: true,
        registdate: new Date().toLocaleString(),
      });

      //삭제후 등록모드 전환
      setSaveMode("C");
    }
  };

  return (
    <div>
      {/* step2. 화면을 구성한다. */}
      {/* 데이터 입력영역 */}
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
              <td style={{ width: "150px" }}>내용</td>
              <td>
                <textarea
                  style={{ width: "100%" }}
                  cols="20"
                  rows="10"
                  name="contents"
                  value={article.contents}
                  onChange={(e) => onArticleChange(e)}
                ></textarea>
              </td>
            </tr>

            <tr>
              <td style={{ width: "150px" }}>조회수</td>
              <td>{article.viewCount}</td>
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
      <hr />
      {/* 데이터 목록  */}
      <div>
        <table style={{ width: "90%" }}>
          <thead>
            <tr>
              <th width="*">글번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>내용</th>
              <th>조회수</th>
              <th>등록일시</th>
              <th>게시여부</th>
              <th>선택</th>
            </tr>
          </thead>

          <tbody>
            {articleList.map((item, i) => (
              <tr key={item.idx}>
                <td>{item.idx}</td>
                <td>{item.title}</td>
                <td>{item.writer}</td>
                <td>{item.contents}</td>
                <td>{item.viewCount}</td>
                <td>{item.registdate}</td>
                <td>{item.isdisplay}</td>
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
