import React from 'react';
import PropTypes from 'prop-types';

import Home from './Home';
import Task from './Task';
import Final from './Final';

const Main = ({
  page, clickHeroButton, correctAnswers, wordList, articleType, changePage, lang,
}) => {
  if (page === 'task') {
    return (
      <Task
        lang={lang}
        articleType={articleType}
        wordList={wordList}
        changePage={changePage}
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
  lang: PropTypes.string,
  correctAnswers: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.string,
  clickHeroButton: PropTypes.func,
  articleType: PropTypes.string,
  wordList: PropTypes.arrayOf(PropTypes.shape()),
  changePage: PropTypes.func,
};

export default Main;
