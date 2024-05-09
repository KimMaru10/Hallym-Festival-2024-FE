import React, { useState, useEffect } from "react";
import "./Board.scss";
const Board = ({ title, writeTime, content, anonymous }) => {
  const [board, setBoard] = useState({
    title: "",
    writeTime: "",
    content: "",
    anonymous: "",
  });

  useEffect(() => {
    // Props로 받은 데이터를 state에 설정
    setBoard({
      title: title,
      writeTime: writeTime,
      content: content,
      anonymous: anonymous,
    });
  }, [title, writeTime, content, anonymous]);

  return (
    <div className="Board">
      <div className="Board-container">
        <div className="Board-container-title">
          <h3>{board.title}</h3>
        </div>
        <div className="Board-container-writeTime">
          <p>{board.writeTime}</p>
        </div>
      </div>
      <div className="Board-container-content">
        <p>{board.content}</p>
      </div>
      <div className="Board-container-anonymous">
        <p>{board.anonymous}</p>
      </div>
    </div>
  );
};

export default Board;
