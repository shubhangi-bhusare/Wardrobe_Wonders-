import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/OrderConfirmation.css'; // Import CSS for animations

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/customer'); // Navigate to the home page or any other route
  };

  return (
    <div className="order-confirmation">
      <h1>Your Order has been Placed!</h1>
      <div className="animated-message">
        <p>Thank you for your purchase!</p>
      </div>
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default OrderConfirmation;