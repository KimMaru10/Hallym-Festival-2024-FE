import React, { useState } from "react";
import { formalLoginApi } from "../../apis/formalLoginApi";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    id: "",
    pw: "",
  });

  const navigate = useNavigate();

  const submitLogin = async (e) => {
    try {
      e.preventDefault(); //submit시 기본 브라우저 동작인 새로고침을 막음
      const { accessToken, refreshToken } = await formalLoginApi(
        loginForm.id,
        loginForm.pw
      );
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
      console.log("login 성공! 로컬스토리지를 확인해주세요");
      navigate("/admin");
    } catch (error) {
      alert("아이디와 패스워드를 확인해주세요");
    }
  };

  return (
    <div>
      <div className="Login">
        <div className="login_form">
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            name="id"
            value={loginForm.id}
            onChange={(e) => setLoginForm({ ...loginForm, id: e.target.value })}
          ></input>
        </div>

        <div className="login_form">
          <label htmlFor="pw">패스워드</label>
          <input
            type="password"
            id="pw"
            name="pw"
            value={loginForm.pw}
            onChange={(e) => setLoginForm({ ...loginForm, pw: e.target.value })}
          ></input>
        </div>

        <div className="login_button" onClick={submitLogin}>
          로그인
        </div>
      </div>
    </div>
  );
};

export default Login;
