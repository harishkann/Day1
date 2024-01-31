// import React from 'react';
import { Link } from "react-router-dom";

const ButtonContainer = () => {
  // Define event handlers
  const handleAddGift = () => {
    // Logic for adding a gift
  };

  const handleViewGifts = () => {
    // Logic for viewing gifts
  };

  const handleEditGifts = () => {
    // Logic for editing gifts
  };

  const handlePaymentHistory = () => {
    // Logic for viewing payment history
  };

  return (
    <div className="button-container" style={containerStyle}>
      <button
        style={{ ...buttonStyle, backgroundColor: '#008CBA' }} // Blue color for ADD GIFT
        onClick={handleAddGift}
      >
        <Link to="/post" style={linkStyle}>ADD GIFT</Link>
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: '#4CAF50' }} // Green color for VIEW GIFT
        onClick={handleViewGifts}
      >
        <Link to="/Aviewgift" style={linkStyle}>VIEW GIFT</Link>
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: '#FFD700' }} // Yellow color for VIEW ORDERS
        onClick={handleEditGifts}
      >
        VIEW ORDERS
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: '#FF6347' }} // Red color for PAYMENT HISTORY
        onClick={handlePaymentHistory}
      >
        PAYMENT HISTORY
      </button>
    </div>
  );
};

// CSS styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #4CAF50',
  borderRadius: '5px',
  padding: '20px',
  width: 'fit-content',
  height: 'auto',
};

const buttonStyle = {
  padding: '15px 30px',
  margin: '0 10px',
  backgroundColor: '#008CBA',
  color: 'white',
  border: '2px solid #008CBA',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '18px',
  minWidth: '150px',
  textAlign: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default ButtonContainer;
