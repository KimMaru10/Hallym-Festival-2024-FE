import React from "react";
import Header from "../../components/Header/Header";
import YouTube from "react-youtube";
import "./promotionalVideo.scss";
import { Background} from "../../components/index.js";

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
      <Background hasLogo={true} title={"안내"} />
     <Header/>
 
      <div className="list_wrapper">
        <header className="item_header">홍보영상</header>
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
    </div>
  );
};

export default PromotionalVideo;
