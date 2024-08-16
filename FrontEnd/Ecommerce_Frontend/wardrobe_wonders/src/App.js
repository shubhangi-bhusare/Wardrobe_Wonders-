import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from './components/Footer';
import MainNavBar from './components/MainNavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeComponent from './pages/Homecomponent';
import AdminComponent from './pages/AdminComponent';
import AdminNavBar from "./pages/AdminNavBar";
import './Style/AdminComponent.css';
import './Style/AdminSidebar.css';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div className="">
      <AdminNavBar></AdminNavBar>
      <Header></Header>
      <MainNavBar></MainNavBar>
   
      <Routes>
          <Route path="/" element={<HomeComponent/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminComponent />} />
          <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
     
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;



