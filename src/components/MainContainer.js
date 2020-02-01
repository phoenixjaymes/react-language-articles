import React from 'react';
import PropTypes from 'prop-types';

const MainContainer = ({ children }) => (
  <main>
    <div className="inner-container">
      {children}
    </div>
  </main>
);

MainContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default MainContainer;
