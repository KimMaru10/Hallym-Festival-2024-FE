import React from "react";
import { Background, Header } from "../../components/index.js";
import CommuBoard from "../../components/CommunityComponents/CommuBoard.jsx";
import "./Community.scss";

const Community = () => {
  return (
    <div className="community">
      <Background hasLogo={false} />
      <Header headcenter="커뮤니티" />
      <div className="community-container">
        <div className="community-container-wrapper">
          <div className="community-container-wrapper-notice">
            {/* 해당 커뮤니티는 축제 관련 커뮤니티입니다. 타인을 비방, 조롱, 분란
            조장, 운영 방해, 인식공격, 욕설, 비속어 등의 부적절한 내용은 법적
            조치가 진행될 수 있습니다. */}
            <div>
              해당 커뮤니티는 축제 관련 커뮤니티입니다.축제 커뮤니티에 부적절한
              내용은 필터링 및 법적 조치가 진행될 수 있습니다.
            </div>
          </div>
          <div className="community-container-wrapper-board">
            <CommuBoard />
          </div>
          <div className="post_bnt_wrapper">
            <div className="post_bnt"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
