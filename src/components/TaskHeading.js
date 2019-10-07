import React from 'react';
import PropTypes from 'prop-types';

const TaskHeading = ({ lang, articleType }) => {
  const language = lang === 'de' ? 'German' : "Dutch";
  const articleName = articleType === 'definite' ? 'Definite' : 'Indefinite';

  return (
    <h1 className="center-text">{`${language} ${articleName} Articles`}</h1>
  );
};

TaskHeading.propTypes = {
  lang: PropTypes.string,
  articleType: PropTypes.string,
};

export default TaskHeading;
