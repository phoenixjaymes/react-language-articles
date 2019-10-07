import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      lang: 'de',
      articleType: 'definite',
      words: {},
      isSubShown: false,
      wordList: [],
      articles: [],
      selectedArticle: '',
      checkAnswerLabel: 'Check',
      currentIndex: 0,
      currentWord: '',
      currentEnglish: '',
      length: null,
      answerClass: '',
      answer: '',
      answerText: '',
      correctAnswers: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    const { lang } = this.state;

    const words = sessionStorage.getItem('words');
    let tmpWords;

    if (words) {
      tmpWords = JSON.parse(words);
      this.setState({
        words: tmpWords,
        wordList: tmpWords[lang],
        length: tmpWords[lang].length,
        loading: false,
      });
    } else {
      fetch('http://phoenixjaymes.com/assets/data/language/get-articles.php')
        .then((reponse) => reponse.json())
        .then((responseData) => {
          sessionStorage.setItem('words', JSON.stringify(responseData.data.words));
          this.setState({
            words: responseData.data.words,
            wordList: responseData.data.words[lang],
            length: responseData.data.words[lang].length,
            loading: false,
          });
        })
        .catch((error) => {
          console.log('Error fetching and parsing data', error);

          this.setState({
            loading: false,
            error: true,
          });
        });
    }
  }

  setCorrectAnswers = (articleType, lang = 'de') => {
    const { words } = this.state;

    const answerName = `${articleType}Answer`;

    const correctAnswers = words[lang].map((item) => {
      const wordId = item.id;
      const fullAnswer = `${item[answerName]} ${item.word}`;
      return { id: wordId, answer: fullAnswer };
    });

    this.setState({ correctAnswers });
  }

  changePage = (page) => {
    this.setState({
      page,
    });
  }

  setUpTask = (articleType, lang) => {
    const { words } = this.state;

    this.setState({
      articles: words[lang][0][articleType],
      wordList: words[lang],
      selectedArticle: '',
      currentIndex: 0,
      length: words[lang].length,
      currentWord: words[lang][0].word,
      currentEnglish: words[lang][0].english,
      checkAnswerLabel: 'Check',
      answerClass: '',
      answer: '',
      answerText: '',
    });
  }

  changeLang = (lang) => {
    const { articleType } = this.state;

    if (lang === 'nl' && articleType === 'indefinite') {
      this.setState({
        lang,
        articleType: 'definite',
      });

      this.setUpTask('definite', lang);
      this.setCorrectAnswers('definite', lang);

      return;
    }

    this.setState({ lang });
    this.setUpTask(articleType, lang);
    this.setCorrectAnswers(articleType, lang);
  }

  changeArticleType = (articleType) => {
    const { lang } = this.state;

    this.setState({
      page: 'task',
      articleType,
    });

    this.setUpTask(articleType, lang);
    this.setCorrectAnswers(articleType, lang);
  }

  clickHeroButton = (lang, articleType) => {
    this.setState({
      page: 'task',
      lang,
      articleType,
    });

    this.setUpTask(articleType, lang);
    this.setCorrectAnswers(articleType, lang);
  }

  setSubMenuVisible = (e) => {
    const { isSubShown } = this.state;
    if (e.target.closest('#js-lang')) {
      this.setState({
        isSubShown: !isSubShown,
      });
    } else {
      this.setState({
        isSubShown: false,
      });
    }
  }

  handleArticleClick = (article) => {
    this.setState({ selectedArticle: article });
  }

  checkAnswer = () => {
    const {
      selectedArticle, currentIndex, articleType, wordList,
    } = this.state;

    const answerName = `${articleType}Answer`;
    const tempWordList = wordList;
    const answer = `${wordList[currentIndex][answerName]} ${wordList[currentIndex].word}`;
    let isAnswerCorrect;
    let answerClass;
    let answerText;

    if (selectedArticle === wordList[currentIndex][answerName]) {
      isAnswerCorrect = true;
      answerClass = 'answer-correct';
      answerText = 'Your answer is correct';
    } else {
      isAnswerCorrect = false;
      answerClass = 'answer-incorrect';
      answerText = 'The correct answer is';
      tempWordList.push(wordList[currentIndex]);

      this.setState({
        wordList: tempWordList,
        length: tempWordList.length,
      });
    }

    this.setState({
      answerClass,
      answer,
      answerText,
    });

    return isAnswerCorrect;
  }

  nextWord = () => {
    const { wordList, currentIndex, length } = this.state;

    if (currentIndex < length - 1) {
      this.setState((prevState) => (
        {
          selectedArticle: '',
          currentIndex: prevState.currentIndex + 1,
          currentWord: wordList[prevState.currentIndex + 1].word,
          currentEnglish: wordList[prevState.currentIndex + 1].english,
        }
      ));
    }
  }

  handleCheckAnswer = () => {
    const {
      selectedArticle, checkAnswerLabel, currentIndex, length,
    } = this.state;

    if (selectedArticle === '') {
      return;
    }

    if (checkAnswerLabel === 'Check') {
      const isCorrect = this.checkAnswer();

      if (!isCorrect) {
        this.setState({ checkAnswerLabel: 'Next' });
      } else if (isCorrect && currentIndex < length - 1) {
        this.setState({ checkAnswerLabel: 'Next' });
      } else {
        this.setState({ checkAnswerLabel: 'Finish' });
      }
    } else if (checkAnswerLabel === 'Next') {
      this.nextWord();
      this.setState({
        checkAnswerLabel: 'Check',
        answerClass: '',
        answer: '',
        answerText: '',
      });
    } else if (checkAnswerLabel === 'Finish') {
      this.changePage('final');
    }
  }

  render() {
    const {
      lang, articleType, page, isSubShown, wordList, articles,
      selectedArticle, currentWord, currentEnglish, answer, answerClass, checkAnswerLabel,
      answerText, correctAnswers,
    } = this.state;

    const taskObj = {
      lang,
      articleType,
      articles,
      wordList,
      selectedArticle,
      currentWord,
      currentEnglish,
      checkAnswerLabel,
      answer,
      answerClass,
      answerText,
      actions: {
        changePage: this.changePage,
        handleArticleClick: this.handleArticleClick,
        handleCheckAnswer: this.handleCheckAnswer,
      },
    };

    return (
      <div className="main-container" onClick={this.setSubMenuVisible} role="presentation">
        <Header
          lang={lang}
          page={page}
          articleType={articleType}
          changePage={this.changePage}
          changeLang={this.changeLang}
          changeArticleType={this.changeArticleType}
          isSubShown={isSubShown}
        />
        <Main
          taskObj={taskObj}
          correctAnswers={correctAnswers}
          page={page}
          clickHeroButton={this.clickHeroButton}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
