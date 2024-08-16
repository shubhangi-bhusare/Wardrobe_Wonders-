import React from 'react';
import { NavLink } from 'react-router-dom';
//import '../Style/AdminNavBar.css';  // Update or create this CSS file for styling

const CustDashboard = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/cart" activeClassName="active-link">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/payment" activeClassName="active-link">Payment</NavLink>
        </li>
        <li>
          <NavLink to="/order" activeClassName="active-link">Place order</NavLink>
        </li>
        {/* <li>
          <NavLink to="/deleteproduct" activeClassName="active-link">Delete Product</NavLink>
        </li>
        <li>
          <NavLink to="/getAllproduct" activeClassName="active-link">View All Product</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/getAllproductImages" activeClassName="active-link">View All Product with images</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default CustDashboard;