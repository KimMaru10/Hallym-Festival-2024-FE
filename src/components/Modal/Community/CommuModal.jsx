import React from "react";
import "./CommuModal.scss";
const CommuModal = () => {
  return (
    <div className="modal">
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body-title">
          <div className="modal-body-title-item"></div>
          <div className="modal-body-title-item">글쓰기</div>
          <div className="modal-body-title-item closeBtn">닫기</div>
        </div>
        <div className="modal-body-article">
          <div className="modal-body-article-form">
            <div className="modal-body-article-form-in">
              <label>비밀번호를 입력</label>
              <input
                type="password"
                placeholder="지우고 수정할 때 사용할 비밀번호 4자리입니다."
              />
            </div>
            <div className="modal-body-article-form-in">
              <label>남기고 싶은 말을 자세히 적어주세요.</label>
              <input type="text" placeholder="144이하로 작성해 주세요" />
            </div>
          </div>
          <div>
            해당 커뮤니티는 축제 관련 커뮤니티 입니다. 타인을 비방, 조롱, 분란
            조장, 운영 방해, 인신공격, 욕설, 비속어 등의 부적절한 내용은 법적
            조치가 진행될 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuModal;
