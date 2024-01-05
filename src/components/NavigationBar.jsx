// NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
        <Link to="/">Main</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;