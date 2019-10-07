import React from 'react';
import PropTypes from 'prop-types';

const Articles = ({ articles, handleArticleClick }) => {

  return (
    <div className="articles-box">
      {articles !== undefined && (
        articles.map((article) => (
          <button key={article.id} type="button" onClick={() => handleArticleClick(article.name)}>{article.name}</button>
        )))}
    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  handleArticleClick: PropTypes.func,
};

export default Articles;
