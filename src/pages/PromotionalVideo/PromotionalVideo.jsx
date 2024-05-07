import React from "react";
import Header from "../../components/Header/Header";
import YouTube from "react-youtube";
import "./promotionalVideo.scss";

const PromotionalVideo = () => {
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
    <div className="promotionalVideo">
      <Header headcenter={"홍보영상"} />
      <div className="item_wrapper">
        {dummy.map((it) => {
          return (
            <YouTube
              className="item"
              videoId={it}
              opts={opts}
              style={{ width: "100vw" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PromotionalVideo;
