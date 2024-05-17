import React, { useState } from "react";
import { Background, Header } from "../../components/index.js";
import CommuBoard from "../../components/CommunityComponents/CommuBoard.jsx";
import CommuModal from "../../components/Modal/Community/CommuModal.jsx";
import "./Community.scss";

const Community = () => {
  const clickOut = () => {
    localStorage.setItem("clickOutSide", true);
    console.log("모달 밖", localStorage.getItem("clickOutSide"));
  };
  const [postMocal, setPostModal] = useState(false);

  const handleCloseModal = () => {
    if (postMocal) {
      setPostModal(false);
    }
  };
  return (
    <div className="community" onClick={handleCloseModal}>
      <Background hasLogo={false} />
      <Header headcenter="커뮤니티" />
      <div className="community-container">
        {postMocal && <CommuModal onClose={() => setPostModal(false)} />}
        <div className="community-container-wrapper" onClick={() => clickOut()}>
          <div className="community-container-wrapper-notice">
            <div>
              해당 커뮤니티는 축제 관련 커뮤니티입니다.<br></br>축제 커뮤니티에
              부적절한 내용은 <br></br>필터링 및 법적 조치가 진행될 수 있습니다.
            </div>
          </div>
          {!postMocal && (
            <>
              <div className="community-container-wrapper-board">
                <CommuBoard />
              </div>
              <div className="post_bnt_wrapper">
                <div
                  className="post_bnt"
                  onClick={() => {
                    setPostModal(true);
                  }}
                ></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
