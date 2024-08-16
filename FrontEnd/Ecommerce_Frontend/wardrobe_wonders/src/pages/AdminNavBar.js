import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/AdminNavBar.css';  // Update or create this CSS file for styling

const AdminNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/deleteuser" activeClassName="active-link"></NavLink>
        </li>
        <li>
          <NavLink to="/addproduct" activeClassName="active-link"></NavLink>
        </li>
        <li>
          <NavLink to="/updateproduct" activeClassName="active-link"></NavLink>
        </li>
        <li>
          <NavLink to="/deleteproduct" activeClassName="active-link"></NavLink>
        </li>
        <li>
          <NavLink to="/getAllproduct" activeClassName="active-link"></NavLink>
        </li>
        {/* <li>
          <NavLink to="/getAllproductImages" activeClassName="active-link">View All Product with images</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default AdminNavBar;