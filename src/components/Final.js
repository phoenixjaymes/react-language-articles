import React from 'react';
import PropTypes from 'prop-types';

import MainContainer from './MainContainer';

const Final = ({ correctAnswers }) => {
  const answers = correctAnswers.map((answer) => (
    <li>
      {answer.answer}
    </li>
  ));
  return (
    <MainContainer>
      <h1>Here are all of the correct answers</h1>

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
