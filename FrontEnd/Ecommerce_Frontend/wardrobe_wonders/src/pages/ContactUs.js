import React from 'react';
import '../Style/ContactUs.css';
export default function ContactUs(){
    return ( <div className="contact">
   <h3>Contact Us</h3>
  <p>Email: support@wardrobewonders.com</p>
  <p>Phone: +91 7368738712</p>
  <p>Address: Wardrobe Wonders, Pune</p>
  </div>
)
}
// import React, { useState } from 'react';
// import '../Style/ContactUs.css';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here, e.g., send data to API
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="contact-us-container">
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// }

// export default ContactUs;

