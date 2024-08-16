import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [orderData, setOrderData] = useState({
    purchaseDate: '',
    status: 'PLACED',
    user_id: '',
    product_id: '',
    payment_id: '',
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual backend API endpoint
    fetch('http://localhost:7070/orders/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to place order');
        }
        return response.json();
      })
      .then((data) => {
        setMessage('Order placed successfully!');
        // Reset form after successful submission
        setOrderData({
          purchaseDate: '',
          status: 'PLACED',
          user_id: '',
          product_id: '',
          payment_id: '',
        });
        navigate('/Orderconfirmation')
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  };

  return (
    <div className="add-order-page">
      <h1>Place a New Order</h1>
      <form onSubmit={handleSubmit} className="order-form">
        <label>
          Purchase Date:
          <input
            type="date"
            name="purchaseDate"
            value={orderData.purchaseDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={orderData.status}
            onChange={handleInputChange}
          >
            <option value="PLACED">PLACED</option>
            <option value="IN-PROCESS">IN-PROCESS</option>
            <option value="CANCELLED">CANCELLED</option>
            <option value="RETURNED">RETURNED</option>
          </select>
        </label>
        <label>
          User ID:
          <input
            type="text"
            name="user_id"
            value={orderData.user_id}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Product ID:
          <input
            type="text"
            name="product_id"
            value={orderData.product_id}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Payment ID:
          <input
            type="text"
            name="payment_id"
            value={orderData.payment_id}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Order;

