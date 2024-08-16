// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../Style/CartPage.css';

// const CartPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Default to an empty array if cartItems is undefined
//   const cartItems = location.state?.cartItems || [];

//   const handleCheckout = () => {
//     // Placeholder for checkout functionality
//     alert('Proceeding to checkout...');
//     // You can navigate to a checkout page if implemented
//      navigate('/payment');
//   };

//   const handleGoBack = () => {
//     navigate('/customer');
//   };

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img
//                 src={item.imageUrl}
//                 alt={item.name}
//                 className="cart-item-image"
//               />
//               <div className="cart-item-details">
//                 <h2>Name: {item.pname}</h2>
//                 <p>Price: ${item.price}</p>
//               </div>
//             </div>
//           ))}
//           <button className="checkout-button" onClick={handleCheckout}>
//             Proceed to Checkout
//           </button>
//         </div>
//       )}
//       <button className="go-back-button" onClick={handleGoBack}>
//         Go Back to Products
//       </button>
//     </div>
//   );
// };

// export default CartPage;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Style/CartPage.css';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Default to an empty array if cartItems is undefined
  const cartItems = location.state?.cartItems || [];

  // const handleCheckout = () => {
  //   // Placeholder for checkout functionality
  //   alert('Proceeding to checkout...');
  //   // You can navigate to a checkout page if implemented
  //   navigate(/payment?price=${cartItems.price});
  // };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    // Navigate to the payment page with the total price as a query parameter
    navigate(`/payment?price=${totalPrice}`);
  };

  const handleGoBack = () => {
    navigate('/customer');
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>Name: {item.pname}</h2>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back to Products
      </button>
    </div>
  );
};

export default CartPage;