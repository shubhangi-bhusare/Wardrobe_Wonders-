import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/AdminNavBar.css';

const AdminNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/admin/addproduct" activeClassName="active-link">Add Product</NavLink>
        </li>
        <li>
          <NavLink to="/admin/updateproduct" activeClassName="active-link">Update Product</NavLink>
        </li>
        <li>
          <NavLink to="/admin/deleteproduct" activeClassName="active-link">Delete Product</NavLink>
        </li>
        <li>
          <NavLink to="/admin/getAllproduct" activeClassName="active-link">Get all Products</NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default AdminNavBar;