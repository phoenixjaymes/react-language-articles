import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import '../App.css';

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
        loading: false,
      });
    } else {
      fetch('https://phoenixjaymes.com/assets/data/language/get-articles.php')
        .then((reponse) => reponse.json())
        .then((responseData) => {
          sessionStorage.setItem('words', JSON.stringify(responseData.data.words));
          this.setState({
            words: responseData.data.words,
            wordList: responseData.data.words[lang],
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

  setUpWordList = (lang) => {
    const { words } = this.state;

    this.setState({
      wordList: words[lang],
    });
  }

  changeLang = (lang) => {
    const { articleType } = this.state;

    if (lang === 'nl' && articleType === 'indefinite') {
      this.setState({
        lang,
        articleType: 'definite',
      });

      this.setUpWordList(lang);
      this.setCorrectAnswers('definite', lang);

      return;
    }

    this.setState({ lang });
    this.setUpWordList(lang);
    this.setCorrectAnswers(articleType, lang);
  }

  changeArticleType = (articleType) => {
    const { lang } = this.state;

    this.setState({
      page: 'task',
      articleType,
    });

    this.setUpWordList(lang);
    this.setCorrectAnswers(articleType, lang);
  }

  clickHeroButton = (lang, articleType) => {
    this.setState({
      page: 'task',
      lang,
      articleType,
    });

    this.setUpWordList(lang);
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

  render() {
    const {
      lang, articleType, page, isSubShown, wordList, correctAnswers,
    } = this.state;

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
          correctAnswers={correctAnswers}
          page={page}
          clickHeroButton={this.clickHeroButton}

          lang={lang}
          articleType={articleType}
          wordList={wordList}
          changePage={this.changePage}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
