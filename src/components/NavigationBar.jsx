// NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
        <Link to="/seankimportfolio">Main</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;