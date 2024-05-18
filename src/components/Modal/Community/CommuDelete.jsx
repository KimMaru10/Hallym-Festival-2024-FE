import React, { useState } from "react";
import "./CommuDelete.scss";
import { deleteCommunityDetail } from "../../../apis/axios";
const CommuDelete = ({ id, closeModal }) => {
  const [password, setPassword] = useState("");
  const [pwSame, setPwSame] = useState("");
  const errorMsg = "비밀번호가 일치하지 않습니다.";

  const deleteArticle = async () => {
    try {
      const result = await deleteCommunityDetail(id, password);
      console.log("result가 true가 아님");
      if (result) {
        closeModal();
      } else {
        setPwSame(errorMsg);
      }
    } catch (error) {
      console.log(error);
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="delete" onClick={(e) => e.stopPropagation()}>
      <div className="delete-body">
        <div className="delete-body-title">비밀번호 입력</div>
        <div className="delete-body-subtitle">
          댓글을 삭제하시려면<br></br> 비밀번호를 입력해주세요
        </div>

        <div className="delete-body-input">
          <input
            style={
              pwSame === errorMsg ? { borderBottom: "#f70505 1px solid" } : null
            }
            type="password"
            value={password}
            placeholder="숫자 4자리를 입력하세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          className="delete-body-notice"
          style={pwSame === errorMsg ? { color: "#f70505" } : null}
        >
          {pwSame}
        </div>
      </div>
      <div className="delete-btn" onClick={() => deleteArticle()}>
        삭제하기
      </div>
    </div>
  );
};
//페스워드 입력받음 입력받은 패스워드랑 id 보내고 id에 해당하는 패스워드랑 같은지 확인
export default CommuDelete;
