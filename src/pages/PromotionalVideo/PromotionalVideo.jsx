import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import YouTube from "react-youtube";
import "./promotionalVideo.scss";
import { Background } from "../../components/index.js";
import { useNavigate } from "react-router-dom";

// 메인에서 열리는게 아니고 페이지인데 굳이 모달이어야 하나?
// 일단 페이지 자체 구현하고 나중에 모달로 변경하기

const PromotionalVideo = () => {
  const backgroundRef = useRef();
  const navigate = useNavigate();

  const dummy = [
    "b1F2AVsJ05c",
    "sMivc3RIrFs",
    "b1F2AVsJ05c",
    "b1F2AVsJ05c",
    "b1F2AVsJ05c",
  ];

  const opts = {
    height: "250",
    width: "370",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div
      className="promotionalVideo"
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target == backgroundRef.current) {
          navigate("/home");
        }
      }}
    >
      <Background hasLogo={true} />
      <Header />

      <div className="list_wrapper">
        <header className="item_header">홍보영상</header>
        <div className="item_wrapper">
          {dummy.map((it, index) => {
            return (
              <YouTube
                key={index}
                className="item"
                videoId={it}
                opts={opts}
                style={{ width: "100vw" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PromotionalVideo;
