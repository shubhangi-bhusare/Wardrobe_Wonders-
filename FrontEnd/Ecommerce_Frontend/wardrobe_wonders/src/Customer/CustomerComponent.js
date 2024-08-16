import "bootstrap/dist/css/bootstrap.css"
import {Routes,Route} from 'react-router-dom'
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";
import Payment from "./Payment";
import Order from "./Order";

function CustomerComponent() {
  return (
    <div className="adm">
      <Routes>
          <Route path="/customer" element={<ProductsPage/>}></Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order/>} />
      </Routes>
    </div>
  );
}

export default CustomerComponent;



