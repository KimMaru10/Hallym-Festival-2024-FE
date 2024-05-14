import React, { useEffect, useState } from "react";
import "./Board.scss";

const Board = ({ data }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setLoad(true);
    }
  }, [data]);

  return (
    <div className="Board">
      <div className="Board-list">
        {load ? (
          data.map((it, index) => (
            <div className="item" key={index}>
              <img src={it.url} alt={it.title} />
              <div className="text">
                <div id="text1">{it.title}</div>
                <div id="text2">{it.content}</div>
              </div>
            </div>
          ))
        ) : (
          <h2>이번년도 축제는 뭔가 달라....</h2>
        )}
      </div>
    </div>
  );
};

export default Board;
