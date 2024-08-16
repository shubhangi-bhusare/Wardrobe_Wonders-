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


import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Link } from 'react-router-dom';
import AdminNavBar from "./AdminNavBar";
import AddProductForm from "../AdminFunctionalityComponent/AddProductForm";
import DeleteUserForm from "../AdminFunctionalityComponent/DeleteUserForm";
import DeleteProductForm from "../AdminFunctionalityComponent/DeleteProductForm";
import UpdateProductForm from "../AdminFunctionalityComponent/UpdateProductForm";
import ShowAllProducts from "../AdminFunctionalityComponent/ShowAllProducts";
import '../Style/AdminComponent.css';
import '../Style/AdminSidebar.css';
import { Dropdown } from 'react-bootstrap'; // Import Dropdown from React Bootstrap

function AdminComponent() {
  return (
    <div className="app">
      <AdminNavBar />
      <div className="admin-sidebar">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Admin Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/deleteuser">Delete User</Dropdown.Item>
            <Dropdown.Item as={Link} to="/addproduct">Add Product</Dropdown.Item>
            <Dropdown.Item as={Link} to="/updateproduct">Update Product</Dropdown.Item>
            <Dropdown.Item as={Link} to="/deleteproduct">Delete Product</Dropdown.Item>
            <Dropdown.Item as={Link} to="/getAllproduct">Get All Products</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Routes>
        <Route path="/deleteuser" element={<DeleteUserForm />} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/updateproduct" element={<UpdateProductForm />} />
        <Route path="/deleteproduct" element={<DeleteProductForm />} />
        <Route path="/getAllproduct" element={<ShowAllProducts />} />
      </Routes>
    </div>
  );
}

export default AdminComponent;
