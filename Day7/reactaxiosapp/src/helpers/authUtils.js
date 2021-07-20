// jwt 토큰 디코딩 패키지 참조
import jwtDecode from "jwt-decode";

// 사용자 인증 토큰 조회하기 유틸함수
const getJWTtoken = () => {
  //
  const storageToken = window.localStorage.getItem("jwttoken");

  if (storageToken != undefined) {
    return storageToken;
  } else {
    return "";
  }
};

// 현재 사용자 로그인 여부 체크 함수
const isMemberLogined = () => {
  const storageToken = window.localStorage.getItem("jwttoken");

  if (storageToken != null) {
    return true;
  } else {
    return false;
  }
};

// jwt 기반 로그인 사용자 정보 조회하기
const getLoginMember = () => {
  const storageToken = window.localStorage.getItem("jwttoken");

  if (storageToken == undefined) {
    return null;
  }

  // 토큰에서 디코딩된 값을 추출한다.
  const decoded = jwtDecode(storageToken);

  const member = { email: decoded.email, username: decoded.username };

  return member;
};

export { getJWTtoken, isMemberLogined, getLoginMember };
