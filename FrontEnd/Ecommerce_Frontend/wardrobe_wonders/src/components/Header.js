// import React from 'react'
// import "./Header.css"
// export default function Header() {
//   return (
//     <div>
//        <h1 className='myclass'>Wardrobe_Wonders</h1>
//     </div>
//   )
// }
import React from 'react';
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Wardrobe Wonders</h1>
    </header>
  );
}

// import React from 'react';
// //import '../style/Header.css'; // Import the CSS file
// import { NavLink } from 'react-router-dom';

// function Header() {
//   return (
//     <header className="header">
//       <div className="header-logo">
//         <NavLink to="/" exact>
//           <img src="/logo.png" alt="KunSavi FashionFusion" />
//         </NavLink>
//       </div>
//       <nav className="header-nav">
//         <ul>
//           <li>
//             <NavLink to="/" exact activeClassName="active">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/shop" activeClassName="active">
//               Shop
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" activeClassName="active">
//               About Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" activeClassName="active">
//               Contact Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/cart" activeClassName="active">
//               Cart
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
