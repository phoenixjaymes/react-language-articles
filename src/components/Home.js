import React from 'react';
import PropTypes from 'prop-types';

import MainContainer from './MainContainer';

function Home({ clickHeroButton }) {
  return (
    <MainContainer>
      <h1>Language Articles</h1>
      <h2>Test Your Knowledge of Articles</h2>
      <p>
        The German articles are der, die, das, ein, and eine.
      </p>

      <p>
        The Dutch articles are de and het.
      </p>

      <div className="hero-buttons">
        <button type="button" onClick={() => clickHeroButton('de', 'definite')}>German Definite</button>
        <button type="button" onClick={() => clickHeroButton('de', 'indefinite')}>German Indefinite</button>
        <button type="button" onClick={() => clickHeroButton('nl', 'definite')}>Dutch Definite</button>
      </div>
    </MainContainer>
  );
}

Home.propTypes = {
  clickHeroButton: PropTypes.func,
}

export default Home;
