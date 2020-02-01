import React from 'react';
import PropTypes from 'prop-types';

const CheckAnswers = ({
  buttonLabel, handleCheckClick, handleNextClick, handleFinishClick,
}) => {
  let buttonToUse;

  if (buttonLabel === 'check') {
    buttonToUse = <button className="btn-check" type="button" onClick={() => handleCheckClick()}>{buttonLabel}</button>;
  } else if (buttonLabel === 'next') {
    buttonToUse = <button className="btn-check" type="button" onClick={() => handleNextClick()}>{buttonLabel}</button>;
  } else if (buttonLabel === 'finish') {
    buttonToUse = <button className="btn-check" type="button" onClick={() => handleFinishClick()}>{buttonLabel}</button>;
  }

  return (
    <div className="check-answer-box">
      {buttonToUse}
    </div>
  );
};

CheckAnswers.propTypes = {
  buttonLabel: PropTypes.string,
  handleCheckClick: PropTypes.func,
  handleNextClick: PropTypes.func,
  handleFinishClick: PropTypes.func,
};

export default CheckAnswers;
