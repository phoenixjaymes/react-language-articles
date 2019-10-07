import React from 'react';
import PropTypes from 'prop-types';

import Home from './Home';
import Task from './Task';
import Final from './Final';

const Main = ({
  taskObj, page, clickHeroButton, correctAnswers,
}) => {
  if (page === 'task') {
    return (
      <Task
        taskObj={taskObj}
      />
    );
  }

  if (page === 'final') {
    return <Final correctAnswers={correctAnswers} />;
  }

  if (page === 'home') {
    return <Home clickHeroButton={clickHeroButton} />;
  }

  return <Home clickHeroButton={clickHeroButton} />;
};

Main.propTypes = {
  taskObj: PropTypes.shape(),
  correctAnswers: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
  clickHeroButton: PropTypes.func,
};

export default Main;
