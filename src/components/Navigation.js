import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Asteroids"
          onClick={() => handlePageChange('Asteroids')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Asteroids' ? 'nav-link active' : 'nav-link'}
        >
          Asteroids
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Calculator"
          onClick={() => handlePageChange('Calculator')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Calculator' ? 'nav-link active' : 'nav-link'}
        >
          Calculator
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GameTrack"
          onClick={() => handlePageChange('GameTrack')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'GameTrack' ? 'nav-link active' : 'nav-link'}
        >
          GameTrack
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Network"
          onClick={() => handlePageChange('Network')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Network' ? 'nav-link active' : 'nav-link'}
        >
          Network
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Node"
          onClick={() => handlePageChange('Node')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Node' ? 'nav-link active' : 'nav-link'}
        >
          Node
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#SQL"
          onClick={() => handlePageChange('SQL')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'SQL' ? 'nav-link active' : 'nav-link'}
        >
          SQL
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
