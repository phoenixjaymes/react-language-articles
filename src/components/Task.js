import React from 'react';
import PropTypes from 'prop-types';

import MainContainer from './MainContainer';
import TaskHeading from './TaskHeading';
import ArticleButtons from './ArticleButtons';
import CheckAnswers from './CheckAnswers';

const Task = ({ taskObj }) => {
  const {
    lang, articleType, articles, selectedArticle, currentWord, currentEnglish,
    actions, answer, answerClass, checkAnswerLabel, answerText,
  } = taskObj;
  const { handleArticleClick, handleCheckAnswer } = actions;

  return (
    <MainContainer>
      <TaskHeading
        lang={lang}
        articleType={articleType}
      />

      <div className="word-box">
        <div>
          <p>{currentEnglish}</p>
          <span className="word-box__article">{selectedArticle}</span>
          <span className="word-box__word">{currentWord}</span>
        </div>
      </div>

      <ArticleButtons
        articles={articles}
        handleArticleClick={handleArticleClick}
      />

      <CheckAnswers
        label={checkAnswerLabel}
        handleCheckAnswer={handleCheckAnswer}
      />

      <div className={`answer-box ${answerClass}`}>
        {answerText}
        <br />
        {answer}
      </div>
    </MainContainer>
  );
};

Task.propTypes = {
  taskObj: PropTypes.shape(),
};

export default Task;
