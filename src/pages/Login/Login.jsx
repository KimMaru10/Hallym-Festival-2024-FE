import React, { useState } from "react";
import { loginApi } from "../../apis/loginApi";
import { useNavigate } from "react-router-dom";
import { LoginAtom } from "../../recoil/LoginAtom";
import { useRecoilState } from "recoil";
import { Background } from "../../components";
import "./Login.scss";
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loginAtomState, setLoginAtomState] = useRecoilState(LoginAtom);
  // const setLoginAtom = useSetRecoilState(LoginAtom);

  const submitLogin = async (e) => {
    try {
      console.log(
        "아직 토큰 불러오기 전, recoil: login state=",
        loginAtomState
      );

      e.preventDefault(); //submit시 기본 브라우저 동작인 새로고침을 막음

      const accessToken = await loginApi(loginForm.id, loginForm.password);

      localStorage.setItem("access", accessToken); // 추후 해시 암호화 하기
      setLoginAtomState(true);
      console.log("토큰 불러온 후, recoil: login state=", loginAtomState);

      // setLoginAtom(true); ->아톰을 불러오지 않고 세팅만 할 경우 useSetRecoilState만 사용
      console.log("login 성공! 로컬스토리지를 확인해주세요");

      navigate("/admin");
    } catch (error) {
      setLoginAtomState(false);
      console.log("로그인 실패, recoil: login state= ", loginAtomState);
    }
  };

  return (
    <div className="login">
      <Background hasLogo={true} />
      <div className="login-container">
        <div className="login-container-empty">관리자</div>
        <div className="login-container-login">
          <div className="login-container-login-form">
            <div className="login-container-login-form-div">
              <label className="login_label" htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                name="id"
                value={loginForm.id}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, id: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="login-container-login-form">
            <div className="login-container-login-form-div">
              <label className="login_label" htmlFor="pw">
                패스워드
              </label>
              <input
                type="password"
                id="pw"
                name="pw"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div></div>
        </div>
        <div className="login-container-btn" onClick={() => submitLogin()}>
          <div className="inbtn">로그인</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
