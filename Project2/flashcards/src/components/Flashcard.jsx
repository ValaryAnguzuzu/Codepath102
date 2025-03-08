import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer, isFlipped, setIsFlipped, bgColor }) => {
  return (
    <div
      className="flashcard"
      style={{ backgroundColor: bgColor }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {isFlipped ? (
        <p className="answer">{answer}</p>
      ) : (
        <p className="question">{question}</p>
      )}
    </div>
  );
};

export default Flashcard;