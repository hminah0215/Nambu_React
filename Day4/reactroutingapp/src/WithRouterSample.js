import React from "react";

// history 기능 사용을 위한 WithRouter 객체 참조
import { withRouter } from "react-router-dom";

// 함수형 컴포넌트에서의 기본적인 history사용법 (링크 컴포넌트/페이지 간 이동)
const WithRouterSample = ({ location, match, history }) => {
  const onMoveToHome = () => {
    // history.push 메소드는 해당 경로가 없으면 이동경로내약 목록에 해당 링크 주소 추가
    // 있으면 기 등록된 라우팅 주소 url을 그냥 사용하여 해당 컴포넌트로 이동하게 한다.
    history.push("/");
  };

  return (
    <div>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        {/* WithRouter 객체를 이용해 history를 사용하는 경우 반드시 export 출력에서 
        WithRouter 객체로 컴포넌트를 감싼다. */}
        홈 이동하기
      </button>
      <button onClick={onMoveToHome}>홈 이동하기</button>
    </div>
  );
};

// useHistory 를 사용하면 이렇게 감싸주지 않아도 괜찮음
export default withRouter(WithRouterSample);
