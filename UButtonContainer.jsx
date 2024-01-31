// UButtonContainer.js
// import React from 'react';
import { Link } from 'react-router-dom';

const UButtonContainer = () => {
  const handleHomeClick = () => {
    // Logic for handling Home button click
  };

  const handlePlaceOrderClick = () => {
    // Logic for handling Place Order button click
  };

  const handleMyOrderClick = () => {
    // Logic for handling My Order button click
  };

  const handleLogoutClick = () => {
    // Logic for handling Logout button click
  };

  return (
    <div
      className="button-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        padding: '20px',
        width: 'fit-content',
      }}
    >
      <button
        className="button"
        style={{
          padding: '15px 30px',
          margin: '0 10px',
          backgroundColor: '#008CBA',  // Blue
          color: 'white',
          border: '2px solid #008CBA',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          fontSize: '18px',
          minWidth: '150px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={handleHomeClick}
      >
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
      </button>
      <button
        className="button"
        style={{
          padding: '15px 30px',
          margin: '0 10px',
          backgroundColor: '#FF6347',  // Red-Orange
          color: 'white',
          border: '2px solid #FF6347',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          fontSize: '18px',
          minWidth: '150px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={handlePlaceOrderClick}
      >
        <Link to="/placeorder" style={{ color: 'white', textDecoration: 'none' }}>PLACE ORDER</Link>
      </button>
      <button
        className="button"
        style={{
          padding: '15px 30px',
          margin: '0 10px',
          backgroundColor: '#4CAF50',  // Green
          color: 'white',
          border: '2px solid #4CAF50',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          fontSize: '18px',
          minWidth: '150px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={handleMyOrderClick}
      >
        <Link to="/myorder" style={{ color: 'white', textDecoration: 'none' }}>MY ORDER</Link>
      </button>
      <button
        className="button logout-button"
        style={{
          padding: '15px 30px',
          margin: '0 10px',
          backgroundColor: '#9C27B0',  // Purple
          color: 'white',
          border: '2px solid #9C27B0',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          fontSize: '18px',
          minWidth: '150px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={handleLogoutClick}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default UButtonContainer;
