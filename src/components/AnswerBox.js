import React from 'react';

const AnswerBox = ({ answerClass, answerText, answer}) => (
  <div className={`answer-box ${answerClass}`}>
    <div>
      <p className="answer-box__text">{answerText}</p>
      <p className="answer-box__answer">{answer}</p>
    </div>
  </div>
);

export default AnswerBox;
