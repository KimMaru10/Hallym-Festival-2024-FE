import React, { useState, useEffect } from "react";
import { Background, Header } from "../../components/index.js";
import BingoInfo from "../../components/Modal/BingoInfo/BingoInfo.jsx";
import EventsModal from "../../components/Modal/EventsModal/EventsModal.jsx";
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
  const [answeredCount, setAnsweredCount] = useState(0);
  const [marks, setMarks] = useState(Array(9).fill(null));
  const [infoModalVisible, setInfoModalVisible] = useState(true);
  const [eventsModalVisible, setEventsModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [mode, setMode] = useState(false);
  const [countBingo, setCountBingo] = useState(0);
  const [questionData, setQuestionData] = useState({
    question: "",
    answer: "",
    answer2: "",
  });
  const navigate = useNavigate();

  const QuestionList = [
    {
      question: "티저영상에서 축제 로고가 몇 번 나올까?",
      answer: "2번",
      answer2: "2",
    },
    {
      question: "기담의 뜻은?",
      answer: "기초교육관 담력체험",
      answer2: "기초교육관담력체험",
    },
    {
      question: '축제 컨셉 "영화"의 한자 풀이는?',
      answer: "어릴영 꽃화",
      answer2: "어릴영,꽃화",
    },
    {
      question: "올해 웹사이트를 제작한 동아리는?",
      answer: "씨애랑",
      answer2: "C애랑",
    },
    {
      question: "축제 부제목 이름은?",
      answer: "그대라는 꽃으로 채워질 영화",
      answer2: "그대라는 꽃으로 채워질 영화",
    },
    {
      question: "축제 기간은 며칠일까?",
      answer: "3일",
      answer2: "3",
    },
    {
      question: "<넌센스퀴즈> 사람들이 가장 좋아하는 영화는?",
      answer: "부귀영화",
      answer2: "부귀 영화",
    },
    {
      question: "주점 예약제는 올해가 최초다 (0/X)",
      answer: "o",
      answer2: "0",
    },
    {
      question: "올해 마스코트의 이름은?",
      answer: "하리미",
      answer2: "하리미",
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
    // 이미 마킹된 셀은 클릭하지 못하도록 조기에 반환
    if (marks[index]) {
      return;
    }
    setCurrentIndex(index);
    setQuestionData(QuestionList[index]);
    setEventsModalVisible(true);
  };

  const validateAnswer = (userAnswer, correctAnswer, correctAnswer2) => {
    const formattedUserAnswer = userAnswer
      ? userAnswer.toLowerCase().replace(/[,\s]/g, "")
      : "";
    const formattedCorrectAnswer = correctAnswer
      ? correctAnswer.toLowerCase().replace(/[,\s]/g, "")
      : "";
    const formattedCorrectAnswer2 = correctAnswer2
      ? correctAnswer2.toLowerCase().replace(/[,\s]/g, "")
      : "";

    return (
      formattedUserAnswer === formattedCorrectAnswer ||
      formattedUserAnswer === formattedCorrectAnswer2
    );
  };

  const handleSubmitAnswer = (userAnswer) => {
    const isCorrect = validateAnswer(
      userAnswer,
      questionData.answer,
      questionData.answer2
    );
    const updatedMarks = marks.map((mark, i) =>
      i === currentIndex ? (isCorrect ? "O" : "X") : mark
    );

    setMarks(updatedMarks);
    setEventsModalVisible(false);

    const bingoCount = checkBingo(updatedMarks);
    setCountBingo(bingoCount);
    setAnsweredCount((prevCount) => prevCount + 1);
  };

  const handleGotoBack = () => {
    navigate("/home");
  };

  const handleStartGame = () => {
    setInfoModalVisible(false);
  };

  const handleCancelGame = () => {
    handleGotoBack();
  };

  useEffect(() => {
    if (answeredCount >= 9 || countBingo >= 2) {
      setMode(true);
      setInfoModalVisible(true);
    }
  }, [answeredCount, countBingo]);

  return (
    <div className="events">
      <Background />
      <Header headcenter="이벤트" />
      <div className="events-container">
        <div className="events-container-wrapper">
          <BingoInfo
            mode={mode}
            visible={infoModalVisible}
            onSubmit={handleStartGame}
            onClose={handleCancelGame}
          />
          {!infoModalVisible && (
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
          )}
          {eventsModalVisible && (
            <EventsModal
              question={questionData.question}
              onSubmit={handleSubmitAnswer}
              onClose={() => setEventsModalVisible(false)}
            />
          )}
          {(answeredCount >= 9 || countBingo >= 2) && (
            <BingoInfo
              mode={mode}
              visible={infoModalVisible}
              onSubmit={handleStartGame}
              onClose={handleCancelGame}
              bingoCount={countBingo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
