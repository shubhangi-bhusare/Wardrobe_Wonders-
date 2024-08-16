import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/UserOperation.css'
const UserOperations = () => {
  return (
    <div className="product-operations">
      <h2>User Operations</h2>
      <nav className="product-operations-nav">
        <ul>
          <li>
            <NavLink to="/admin/deleteuser" className="nav-link" activeClassName="active-link">Delete User</NavLink>
          </li>
          <li>
            <NavLink to="/admin/getallusers" className="nav-link" activeClassName="active-link">Show All Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserOperations;