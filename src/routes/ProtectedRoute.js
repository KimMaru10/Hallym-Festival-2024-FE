import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../recoil/TokenAtom";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  isLogin ? <Outlet></Outlet> : <Navigate to={"/login"} replace></Navigate>;
};
/**
 * <Outlet/>
 * React-roouter에서 제공하는 HOC로 React.Children처럼
 * 경로에 해당하는 컴포넌트를 리턴해주는 고차 컴포넌트
 *
 * <Navigate to={}/>
 * React-router에서 제공하는 HOC로 to 속성으로
 * 지정해준 Path로 이동시켜주는 컴포넌트
 *
 * location.replace('보낼곳')
 * 브라우저가 제공하는 location api의 메서드, 새로운 히스토리 스택을 쌓지 않고
 * 현재 스택을 대체한다.
 * replace옵션은 이 location.replace를 직접조작하는 것과
 * 같은 효과를 내는 react-router의 옵션이다
 */
export default ProtectedRoute;
