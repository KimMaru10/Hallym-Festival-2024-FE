import React, { useEffect } from "react";

const PreloadImage = ({ src }) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);

  return null; // 이미지를 화면에 렌더링하지 않으므로 null을 반환합니다.
};

export default PreloadImage;
