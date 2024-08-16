import React, { useState, useEffect } from 'react';
import OrderService from '../services/OrderService'; // Ensure this service is correctly set up
import '../Style/ShowAllOrders.css'; // Import your CSS file

function ShowAllOrders() {
  const [orders, setOrders] = useState([]);

  // Fetch all orders when the component mounts
  useEffect(() => {
    OrderService.getAllOrderS()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div className="show-all-orders-container">
      <h2 className="show-all-orders-heading">All Orders</h2>
      <table className="show-all-orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Purchase Date</th>
            <th>Status</th>
            <th>User ID</th>
            <th>Product ID</th>
            <th>Payment ID</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}> {/* Use Order ID as the unique key */}
                <td>{order.id}</td>
                <td>{order.purchaseDate}</td>
                <td>{order.status}</td>
                <td>{order.user_id}</td>
                <td>{order.product_id}</td>
                <td>{order.payment_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No orders available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowAllOrders;