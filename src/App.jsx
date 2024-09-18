import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemDetails from "./scenes/item/ItemDetails";

import CartMenu from "./components/CartMenu";

import Checkout from "./scenes/checkout/Checkout";
import Login from "./scenes/seller/Login";
import SellerDashboard from "./scenes/seller/SellerDashboard";
import SellerProtectedRoute from "./scenes/seller/SellerProtectedRoute";

function App() {
  return (
    <div className="m-auto">
      <BrowserRouter>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          {/* <Route path="checkout/success" element={<Confirmation />} /> */}

          <Route path="login" element={<Login />} />

          <Route
            path="seller"
            element={
              <SellerProtectedRoute>
                <SellerDashboard />
              </SellerProtectedRoute>
            }
          >
            {/* <Route index element={}/> */}
          </Route>
        </Routes>

        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
