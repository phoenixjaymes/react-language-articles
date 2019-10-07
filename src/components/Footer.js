import React from 'react';

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <div className="inner-container">
        <small>{`\u00A9 ${currYear} PhoenixJaymes`}</small>
      </div>
    </footer>
  );
}

export default Footer;
