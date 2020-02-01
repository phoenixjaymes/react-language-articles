import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ currentEnglish, selectedArticle, currentWord }) => (
  <div className="word-box">
    <div>
      <p>{currentEnglish}</p>
      <span className="word-box__article">{selectedArticle}</span>
      <span className="word-box__word">{currentWord}</span>
    </div>
  </div>
);

WordBox.propTypes = {
  currentEnglish: PropTypes.string,
  selectedArticle: PropTypes.string,
  currentWord: PropTypes.string,
};

export default WordBox;
