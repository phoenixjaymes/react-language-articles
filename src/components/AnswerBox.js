import React from 'react';
import PropTypes from 'prop-types';

const AnswerBox = ({ answerClass, answerText, answer }) => (
  <div className={`answer-box ${answerClass}`}>
    <div>
      <p className="answer-box__text">{answerText}</p>
      <p className="answer-box__answer">{answer}</p>
    </div>
  </div>
);

AnswerBox.propTypes = {
  answerClass: PropTypes.string,
  answerText: PropTypes.string,
  answer: PropTypes.string,
};

export default AnswerBox;
