import React from "react";

const Background = () => {
  const backgroundStyle = {
    position: "fixed",
    width: "390px", // 컨테이너의 크기와 동일하게 설정
    height: "844px", // 컨테이너의 크기와 동일하게 설정
    backgroundImage: "url('/src/assets/image1.svg')", // 배경 이미지 URL
    backgroundSize: "cover",
    backgroundPosition: "center center",
    transform: "translateZ(0)", // 문자열로 전달
    willChange: "transform", // 문자열로 전달
    zIndex: -1,
  };

  return <div style={backgroundStyle}></div>;
};
export default Background;
