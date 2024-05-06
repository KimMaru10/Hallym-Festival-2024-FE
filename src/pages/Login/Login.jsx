import React, { useState } from "react";
import "./Login.scss";
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    id: "",
    pw: "",
  });
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
        <div className="login_button">로그인</div>
      </div>
    </div>
  );
};

export default Login;
