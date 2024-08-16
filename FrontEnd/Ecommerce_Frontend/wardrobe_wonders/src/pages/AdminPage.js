// import "bootstrap/dist/css/bootstrap.css"
// import {Routes,Route} from 'react-router-dom'
// import AdminNavBar from "./AdminNavBar";
// import AddProductForm from "../AdminFunctionalityComponent/AddProductForm";
// import DeleteUserForm from "../AdminFunctionalityComponent/DeleteUserForm";
// import DeleteProductForm from "../AdminFunctionalityComponent/DeleteProductForm";
// import '../Style/AdminComponent.css';
// import UpdateProductForm from "../AdminFunctionalityComponent/UpdateProductForm";
// import ShowAllProducts from "../AdminFunctionalityComponent/ShowAllProducts";
// import '../Style/AdminSidebar.css'
// function AdminComponent() {
//   return (
//     <div className="app">
//       <link rel="stylesheet" href="Style/AdminSidebar.css"></link>
//       <AdminNavBar></AdminNavBar>
//       <Routes>
//           <Route path="/deleteuser" element={<DeleteUserForm/>}></Route>
//           <Route path="/addproduct" element={<AddProductForm />} />
//           <Route path="/updateproduct" element={<UpdateProductForm />} />
//           <Route path="/deleteproduct" element={<DeleteProductForm />} />
//           <Route path="/getAllproduct" element={<ShowAllProducts />} />       
//       </Routes>
//       {/* <body>
//         <div  className="admin-sidebar">
//         <a href="/deleteuser" >Delete User</a><br></br>
//         <a href="/addproduct" >Add Product</a><br></br>
//         <a href="/updateproduct" >Update  Product</a><br></br>
//         <a href="/deleteproduct" >Delete Product</a><br></br>
//         <a href="/getAllproduct" >get all Products</a><br></br>
//         </div>
        
//       </body> */}
//     </div>
//   );
// }

// export default AdminComponent;



import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import '../Style/AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      {/* Top Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#dashboard">Welcome Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact to="/admin/dashboard" className="nav-link" activeClassName="active">
                Dashboard
              </NavLink>
              <NavLink to="/admin/productsoperations" className="nav-link" activeClassName="active">
                Products
              </NavLink>
              <NavLink to="/admin/orders" className="nav-link" activeClassName="active">
                Orders
              </NavLink>
              <NavLink to="/admin/usersoperations" className="nav-link" activeClassName="active">
                Users
              </NavLink>
              <NavLink to="/admin/settings" className="nav-link" activeClassName="active">
                Settings
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content Area */}
      <Container fluid>
        <Outlet /> {/* This will render the matched child route's component */}
      </Container>
    </div>
  );
};

export default AdminPage;