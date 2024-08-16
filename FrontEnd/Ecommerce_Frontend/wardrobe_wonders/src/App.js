import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Login from './pages/Login';
import Register from './pages/Register';
import HomeComponent from './pages/Homecomponent';
import AdminNavBar from "./pages/AdminNavBar";
import Footer from './components/Footer.js';
// import ContactUs from './pages/ContactUs';
import AddProductForm from "./AdminFunctionalityComponent/AddProductForm";
import DeleteUserForm from "./AdminFunctionalityComponent/DeleteUserForm";
import DeleteProductForm from "./AdminFunctionalityComponent/DeleteProductForm";
import UpdateProductForm from "./AdminFunctionalityComponent/UpdateProductForm";
import ShowAllProducts from "./AdminFunctionalityComponent/ShowAllProducts";
import ProductsPage from './Customer/ProductsPage';
import CartPage from './Customer/CartPage';
import Payment from './Customer/Payment';
import Order from './Customer/Order';
import ContactUs from './pages/ContactUs';
import AdminPage from './pages/AdminPage';
import UserOperations from './AdminFunctionalityComponent/UserOperation';
import ShowAllUsers from './AdminFunctionalityComponent/ShowAllUsers';
import Explore from './Customer/Explore';
import OrderConfirmation from './Customer/OrderConfirmation';
import ShowAllOrders from './AdminFunctionalityComponent/ShowAllOrders.js';
import LearnMore from './components/LearnMore.js';
function App() {
  return (
    <div className="">
    
      <Header></Header>
      {/* <MainNavBar></MainNavBar> */}
      <Routes>
          <Route path="/" element={<HomeComponent/>}></Route>
          <Route path="/explore" element={<Explore/>}></Route>
          <Route path="/learnMore" element={<LearnMore/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer" element={<ProductsPage/>}></Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order/>} />
          <Route path="/Orderconfirmation" element={<OrderConfirmation/>}></Route>
          {/* <Route path="/admin" element={<AdminComponent />} /> */}
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/admin/deleteuser" element={<DeleteUserForm/>}></Route>
        <Route path="/admin/addproduct" element={<AddProductForm />} />
          <Route path="/admin/updateproduct" element={<UpdateProductForm />} />
          <Route path="/admin/deleteproduct" element={<DeleteProductForm />} />
          <Route path="/admin/getAllproduct" element={<ShowAllProducts />} />       
          <Route path="/admin/productsoperations" element={<AdminNavBar />} />
          <Route path="/admin/usersoperations" element={<UserOperations/>} />
          <Route path="/admin/getallusers" element={<ShowAllUsers />} />  
          <Route path="/admin/orders" element={<ShowAllOrders />} />   
          <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
     
      <Footer></Footer>
    </div>
  );
}

export default App;



