// import React, { useState, useEffect } from 'react';
// //import '../Style/PaymentForm.css';
// import { useNavigate } from 'react-router-dom';

// const Payment = () => {
//   const [payment, setPayment] = useState({
//     amount: '',
//     paymentDate: '', 
//     mode: 'CASH', // default mode
//   });

//   const navigate=useNavigate();
//   useEffect(() => {
//     // Set paymentDate to the current date in YYYY-MM-DD format
//     const currentDate = new Date().toISOString().split('T')[0];
//     setPayment((prevPayment) => ({
//       ...prevPayment,
//       paymentDate: currentDate,
//     }));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPayment({
//       ...payment,
//       [name]: value,
//     });
//   };


// const makePayment=async(e)=>{
//     try {
//       const response = await fetch('http://localhost:7070/payments/createPayment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payment),
//       });

//       if (response.ok) {
//         alert('Payment successful!');
//         setPayment({
//           amount: '',
//           paymentDate: new Date().toISOString().split('T')[0], // reset to current date
//           mode: 'CASH',
//         });
//         navigate('/order');
//       } else {
//         alert('Payment failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   }


//   return (
//     <div>
//       <h2>Make a Payment</h2>
//       <form>
//         <div>
//           <label>Amount:</label>
//           <input
//             type="number"
//             name="amount"
//             value={payment.amount}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Payment Date:</label>
//           <input
//             type="date"
//             name="paymentDate"
//             value={payment.paymentDate}
//             onChange={handleChange}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Payment Mode:</label>
//           <select name="mode" value={payment.mode} onChange={handleChange}>
//             <option value="CASH">Cash</option>
//             <option value="UPI">UPI</option>
//             <option value="CREDITCARD">Credit Card</option>
//           </select>
//         </div>
//         <button type="button" onClick={makePayment}>Make Payment</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;


// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../Style/PaymentForm.css';

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get the price from location state
//   const price = location.state?.price || ''; // Default to empty string if price is not available

//   const [payment, setPayment] = useState({
//     amount: price, // Set default amount to the price from location state
//     paymentDate: '', 
//     mode: 'CASH', // default mode
//   });

//   useEffect(() => {
//     // Set paymentDate to the current date in YYYY-MM-DD format
//     const currentDate = new Date().toISOString().split('T')[0];
//     setPayment((prevPayment) => ({
//       ...prevPayment,
//       paymentDate: currentDate,
//     }));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPayment({
//       ...payment,
//       [name]: value,
//     });
//   };

//   const makePayment = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     try {
//       const response = await fetch('http://localhost:7070/payments/createPayment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payment),
//       });

//       if (response.ok) {
//         alert('Payment successful!');
//         setPayment({
//           amount: price, // Reset amount to the price prop
//           paymentDate: new Date().toISOString().split('T')[0], // reset to current date
//           mode: 'CASH',
//         });
//         navigate('/order');
//       } else {
//         alert('Payment failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Make a Payment</h2>
//       <form onSubmit={makePayment}>
//         <div>
//           <label>Amount:</label>
//           <input
//             type="number"
//             name="amount"
//             value={payment.amount}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Payment Date:</label>
//           <input
//             type="date"
//             name="paymentDate"
//             value={payment.paymentDate}
//             onChange={handleChange}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Payment Mode:</label>
//           <select name="mode" value={payment.mode} onChange={handleChange}>
//             <option value="CASH">Cash</option>
//             <option value="UPI">UPI</option>
//             <option value="CREDITCARD">Credit Card</option>
//           </select>
//         </div>
//         <button type="submit">Make Payment</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;




import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Style/PaymentForm.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the price from query parameters
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get('price') || ''; // Default to empty string if price is not available

  const [payment, setPayment] = useState({
    amount: price, // Set default amount to the price from query parameters
    paymentDate: '', 
    mode: 'CASH', // default mode
  });

  useEffect(() => {
    // Set paymentDate to the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split('T')[0];
    setPayment((prevPayment) => ({
      ...prevPayment,
      paymentDate: currentDate,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment({
      ...payment,
      [name]: value,
    });
  };

  const makePayment = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('http://localhost:7070/payments/createPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
      });

      if (response.ok) {
        alert('Payment successful!');
        setPayment({
          amount: price, // Reset amount to the price prop
          paymentDate: new Date().toISOString().split('T')[0], // reset to current date
          mode: 'CASH',
        });
        navigate('/order');
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <form onSubmit={makePayment}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={payment.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Date:</label>
          <input
            type="date"
            name="paymentDate"
            value={payment.paymentDate}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label>Payment Mode:</label>
          <select name="mode" value={payment.mode} onChange={handleChange}>
            <option value="CASH">Cash</option>
            <option value="UPI">UPI</option>
            <option value="CREDITCARD">Credit Card</option>
          </select>
        </div>
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default Payment;
