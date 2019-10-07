import React from 'react';
import PropTypes from 'prop-types';

const MainContainer = ({ children }) => {
  // console.log(children);

  return (
    <main>
      <div className="inner-container">
        {children}
      </div>
    </main>
  );
}

MainContainer.propTypes = {
  children: PropTypes.element,
};

export default MainContainer;
