import React from 'react';
import PropTypes from 'prop-types';

const ArticleButtons = ({ articles, handleArticleClick }) => (
  <div className="articles-box">
    {articles !== undefined && (
      articles.map((article) => (
        <button key={article.id} type="button" onClick={() => handleArticleClick(article.name)}>{article.name}</button>
      )))}
  </div>
);

ArticleButtons.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  handleArticleClick: PropTypes.func,
};

export default ArticleButtons;
