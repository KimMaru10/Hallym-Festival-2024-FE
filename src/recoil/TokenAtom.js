//아톰 생성 2가지 속성
//키와 디폴트 키는 전역적으로 유일한 아톰의 이름이다.
import { atom, selector } from "recoil";
export const TokenAtom = atom({
  key: "tokenState",
  default: { accessToken: "", refreshToken: "" }, //아톰의 초기값
});

//유저의 로그인 유무롤 확인하는 셀렉터
export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => !!get(TokenAtom),
  //!!는 다른타입의 데이터를 불린타입으로 명시적으로 형변환하기 위함
  //빈문자열 ,false,NaN, undefinedm null, 0은 false로 반환
  //토큰이 존재한다면 true를 리턴하도록 함
});
