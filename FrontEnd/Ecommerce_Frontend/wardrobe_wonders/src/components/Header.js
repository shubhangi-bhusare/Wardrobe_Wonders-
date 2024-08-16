
// import React from 'react';
// import "./Header.css";

// export default function Header() {
//   return (
//     <header className="header">
//       <h1 className="header-title">Wardrobe Wonders</h1>
//     </header>
//   );
// }

import React from 'react';
import './Header.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/" exact>
          {/* <img src="/logo.png" alt="Wardrobe_Wonders" /> */}
        </NavLink>
      </div>
      <nav className="header-nav">
        <ul>
          
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active">
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactUs" activeClassName="active">
              ContactUs
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active">
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
