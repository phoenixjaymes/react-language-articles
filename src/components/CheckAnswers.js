import React from 'react';
import PropTypes from 'prop-types';

const CheckAnswers = ({ label, handleCheckAnswer }) => (
  <div className="check-answer-box">
    <button className="btn-check" type="button" onClick={handleCheckAnswer}>{label}</button>
  </div>
);

CheckAnswers.propTypes = {
  label: PropTypes.string,
  handleCheckAnswer: PropTypes.func,
};

export default CheckAnswers;
