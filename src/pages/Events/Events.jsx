import React, { useState, useEffect } from "react";
import { Background, Header, EventsModal } from "../../components/index.js";
import { useNavigate } from "react-router-dom";
import "./Events.scss";
import correctImage from "../../assets/icon/hallym.png";
import wrongImage from "../../assets/icon/hallymgray.png";
const Events = () => {
  const initialBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const [bingoBoard, setBingoBoard] = useState(initialBoard);
  const [marks, setMarks] = useState(Array(9).fill(null));
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [questionData, setQuestionData] = useState({
    question: "",
    answer: "",
  });
  const navigate = useNavigate();
  const QuestionList = [
    {
      question: "영상에서 축제 로고가 몇번 나올까?",
      answer: "4",
    },
    {
      question: "기담의 뜻은?",
      answer: "3",
    },
    {
      question: "축제 부제목 이름은?",
      answer: "5",
    },
    {
      question: "청축 영화 3개 적기?",
      answer: "6",
    },
    {
      question: "8 + 2는?",
      answer: "10",
    },
    {
      question: "1 + 10는?",
      answer: "11",
    },
    {
      question: "5 + 2는?",
      answer: "7",
    },
    {
      question: "0 + 0는?",
      answer: "0",
    },
    {
      question: "7 + 9는?",
      answer: "16",
    },
  ];

  const checkBingo = (marks) => {
    let bingoCount = 0;

    // 행 확인
    for (let i = 0; i < 3; i++) {
      if (
        marks[i * 3] === "O" &&
        marks[i * 3 + 1] === "O" &&
        marks[i * 3 + 2] === "O"
      ) {
        bingoCount++;
      }
    }

    // 열 확인
    for (let i = 0; i < 3; i++) {
      if (marks[i] === "O" && marks[i + 3] === "O" && marks[i + 6] === "O") {
        bingoCount++;
      }
    }

    // 주 대각선 확인
    if (marks[0] === "O" && marks[4] === "O" && marks[8] === "O") {
      bingoCount++;
    }

    // 부 대각선 확인
    if (marks[2] === "O" && marks[4] === "O" && marks[6] === "O") {
      bingoCount++;
    }

    return bingoCount;
  };

  const handleCellClick = (index) => {
    setCurrentIndex(index);
    setQuestionData(QuestionList[index]);
    setModalVisible(true);
  };

  const handleSubmitAnswer = (userAnswer) => {
    const isCorrect = userAnswer === questionData.answer;
    const updatedMarks = marks.map((mark, i) =>
      i === currentIndex ? (isCorrect ? "O" : "X") : mark
    );

    setMarks(updatedMarks);
    setModalVisible(false);

    const countBingo = checkBingo(updatedMarks);
    if (countBingo >= 2) {
      alert("빙고 2개 달성되었습니다!");
      handleGotoBack();
    }
  };

  const handleGotoBack = () => {
    navigate("/home");
  };

  return (
    <div className="events">
      <Background />
      <Header headcenter="이벤트" />
      <div className="events-container">
        <div className="events-container-wrapper">
          <div className="bingo-board">
            {bingoBoard.flat().map((cell, index) => (
              <div
                key={index}
                className={`bingo-cell ${marks[index]}`}
                onClick={() => handleCellClick(index)}
              >
                {marks[index] === "O" ? (
                  <img src={correctImage} alt="Correct" />
                ) : marks[index] === "X" ? (
                  <img src={wrongImage} alt="Wrong" />
                ) : (
                  cell
                )}
              </div>
            ))}
          </div>
          {modalVisible && (
            <EventsModal
              question={questionData.question}
              onSubmit={handleSubmitAnswer}
              onClose={() => setModalVisible(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
