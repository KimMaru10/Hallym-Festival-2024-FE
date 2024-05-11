import React, { useState } from "react";
import "./CommuDelete.scss";
import { deleteCommunityDetail } from "../../../apis/axios";
const CommuDelete = ({ id, closeModal }) => {
  const [password, setPassword] = useState("");

  const deleteArticle = async () => {
    try {
      //delete메소드 성공 여부, test일 경우 undefined
      const result = await deleteCommunityDetail(id, password);
      console.log(result);
      //delete완료시 모달 닫음
      if (result) {
        console.log("result가 true가 아님");
        closeModal();
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
        <div className="input_box">
          <input
            className="delete-body-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="delete-body-notice">
          삭제하기를 누르면 다시 복구할 수 없습니다.
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
