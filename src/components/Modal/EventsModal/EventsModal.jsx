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
        <p>{question}</p>
        <input type="text" value={userAnswer} onChange={handleChange} />
        <button onClick={handleSubmit}>제출</button>
      </div>
    </div>
  );
};

export default EventsModal;
