import React from "react";
import { CommunityHeader, Board } from "../../components/index.js";
import "./Community.scss";
const Community = () => {
  return (
    <div className="community">
      <CommunityHeader title="커뮤니티" />
      <div className="community-notice">
        <p>해당 커뮤니티는 축제 관련 커뮤니티입니다.</p>
        <p>타인을 비방, 조롱, 분란 조장, 운영 방해, 인식공격, </p>
        <p>욕설, 비속어 등의 부적절한 내용은 법적 조치가 진행될 수 있습니다.</p>
      </div>
      <Board
        title="오늘 축제 레전드"
        writeTime="3h"
        content="오늘 축제 000 부스가 좋아요!"
        anonymous="익명"
      />
    </div>
  );
};

export default Community;
