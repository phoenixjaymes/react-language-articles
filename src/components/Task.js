import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainContainer from './MainContainer';
import TaskHeading from './TaskHeading';
import WordBox from './WordBox';
import ArticleButtons from './ArticleButtons';
import CheckAnswers from './CheckAnswers';
import AnswerBox from './AnswerBox';

class Task extends Component {
  constructor(props) {
    super(props);
    const { wordList } = this.props;

    this.state = {
      currentIndex: 0,
      wordList,
      selectedArticle: '',
      buttonLabel: 'check',
      answer: '',
      answerClass: '',
      answerText: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { articleType, wordList } = this.props;

    if (wordList !== prevProps.wordList || articleType !== prevProps.articleType) {
      this.resetComponent();
    }
  }

  resetComponent = () => {
    const { wordList } = this.props;
    this.setState({
      currentIndex: 0,
      wordList,
      selectedArticle: '',
      answer: '',
      answerClass: '',
      answerText: '',
    });
  }

  clearLastAnswer = () => {
    this.setState({
      selectedArticle: '',
      answer: '',
      answerClass: '',
      answerText: '',
    });
  }

  handleArticleClick = (selectedArticle) => {
    this.setState({ selectedArticle });
  }

  handleNextClick = () => {
    this.clearLastAnswer();
    this.changeButtonLabel('check');

    this.setState((prevState) => {
      if (prevState.currentIndex < prevState.wordList.length - 1) {
        return { currentIndex: prevState.currentIndex + 1 };
      }
      return { currentIndex: prevState.currentIndex };
    });
  }

  handleCheckClick = () => {
    const { currentIndex, wordList, selectedArticle } = this.state;

    if (selectedArticle === '') {
      return;
    }

    this.checkAnswer();

    if (currentIndex < wordList.length - 1) {
      this.changeButtonLabel('next');
    } else {
      this.changeButtonLabel('finish');
    }
  }

  checkAnswer = () => {
    const { currentIndex, selectedArticle, wordList } = this.state;
    const { articleType } = this.props;

    const answerName = `${articleType}Answer`;
    const tempWordList = wordList;
    let answerClass;
    const answer = `${wordList[currentIndex][answerName]} ${wordList[currentIndex].word}`;
    let answerText;
    let isAnswerCorrect;

    if (selectedArticle === wordList[currentIndex][answerName]) {
      isAnswerCorrect = true;
      answerClass = 'answer-correct';
      answerText = 'Your answer is correct';
    } else {
      isAnswerCorrect = false;
      answerClass = 'answer-incorrect';
      answerText = 'The correct answer is';
      tempWordList.push(wordList[currentIndex]);
    }

    this.setState({
      wordList: tempWordList,
      answerClass,
      answer,
      answerText,
    });

    return isAnswerCorrect;
  }

  handleFinishClick = () => {
    const { changePage } = this.props;
    changePage('final');
  }

  changeButtonLabel = (buttonLabel) => {
    // const buttonLabelNames = ['check', 'next', 'continue'];
    this.setState({ buttonLabel });
  }

  render() {
    const {
      buttonLabel, selectedArticle, currentIndex,
      answer, answerClass, answerText,
    } = this.state;
    const { articleType, wordList, lang } = this.props;

    return (
      <MainContainer>
        <TaskHeading
          lang={lang}
          articleType={articleType}
        />

        <WordBox
          currentEnglish={wordList[currentIndex].english}
          selectedArticle={selectedArticle}
          currentWord={wordList[currentIndex].word}
        />

        <ArticleButtons
          articles={wordList[currentIndex][articleType]}
          handleArticleClick={this.handleArticleClick}
        />

        <CheckAnswers
          buttonLabel={buttonLabel}
          handleCheckClick={this.handleCheckClick}
          handleNextClick={this.handleNextClick}
          handleFinishClick={this.handleFinishClick}
        />

        <AnswerBox
          answerClass={answerClass}
          answerText={answerText}
          answer={answer}
        />
      </MainContainer>
    );
  }
}

Task.propTypes = {
  lang: PropTypes.string,
  articleType: PropTypes.string,
  wordList: PropTypes.arrayOf(PropTypes.shape()),
  changePage: PropTypes.func,
};

export default Task;
