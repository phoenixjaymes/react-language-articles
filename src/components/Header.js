import React from 'react';
import PropTypes from 'prop-types';

import iconHome from './icon-home.svg';
import deFlag from './flag-germany.svg';
import nlFlag from './flag-netherlands.svg';

const Header = ({
  lang, page, articleType, changePage, changeLang, changeArticleType, isSubShown,
}) => {
  const langIcon = lang === 'de' ? deFlag : nlFlag;
  const subClass = isSubShown === true ? 'show-sub' : '';
  const deClass = lang === 'de' ? 'active' : '';
  const nlClass = lang === 'nl' ? 'active' : '';
  let defClass = '';
  let indefClass = '';

  if (page === 'task') {
    defClass = articleType === 'definite' ? 'active' : '';
    indefClass = articleType === 'indefinite' ? 'active' : '';
  }

  return (
    <header>
      <div className="inner-container main-header">
        <p>Articles</p>

        <nav>
          <ul>
            <li className="li-home" onClick={() => changePage('home')}>
              <img className="home-icon" src={iconHome} alt="home icon" />
            </li>

            <li><span className={defClass} onClick={() => changeArticleType('definite')}>Definite</span></li>

            <li>
              { lang === 'de' && (
                <span className={indefClass} onClick={() => changeArticleType('indefinite')}>Indefinite</span>
              )}
            </li>

            <li id="js-lang" className="li-lang">
              <img className="lang-icon" src={langIcon} alt="flag icon" />

              <ul className={`sub-menu ${subClass}`}>
                <li onClick={() => changeLang('de')}>
                  <span className={deClass}>German</span>
                  <img src={deFlag} alt="german flag icon" />
                </li>

                <li onClick={() => changeLang('nl')}>
                  <span className={nlClass}>Dutch</span>
                  <img src={nlFlag} alt="dutch flag icon" /> 
                </li>
              </ul>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  lang: PropTypes.string,
  page: PropTypes.string,
  articleType: PropTypes.string,
  changePage: PropTypes.func,
  changeLang: PropTypes.func,
  changeArticleType: PropTypes.func,
  isSubShown: PropTypes.bool,
};

export default Header;
