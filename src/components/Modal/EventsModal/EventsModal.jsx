import React, { useState } from "react";
import "./EventsModal.scss";
const EventsModal = ({ question, onSubmit, onClose }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleChange = (e) => setUserAnswer(e.target.value);

  const handleSubmit = () => {
    onSubmit(userAnswer);
    setUserAnswer("");
  };

  return (
    <div className="eventsModal">
      <div className="eventsModal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="questionBox">
          <h2>질문</h2>
          <p>{question}</p>
        </div>
        <div className="answerBox">
          <input type="text" value={userAnswer} onChange={handleChange} />
          <div id="answerSubmit" onClick={handleSubmit}>
            제출
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsModal;
