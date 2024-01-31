// NavBar.js
// import React from '../react';

const NavBar = () => {
  return (
    <nav style={{ background: '#2196f3', padding: '10px', marginBottom: '20px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <li style={{ margin: '0 10px', color: 'white', fontWeight: 'bold' }}>Home</li>
        <li style={{ margin: '0 10px', color: 'white', fontWeight: 'bold' }}>About</li>
        <li style={{ margin: '0 10px', color: 'white', fontWeight: 'bold' }}>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
