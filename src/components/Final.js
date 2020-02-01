import React from 'react';
import PropTypes from 'prop-types';

import MainContainer from './MainContainer';

const Final = ({ correctAnswers }) => {
  const answers = correctAnswers.map((answer) => (
    <li key={answer.id}>
      {answer.answer}
    </li>
  ));
  return (
    <MainContainer>
      <h1>Correct Answers</h1>

      <ul className="final-box">
        {answers}
      </ul>
    </MainContainer>
  );
};

Final.propTypes = {
  correctAnswers: PropTypes.arrayOf(PropTypes.object),
};

export default Final;
