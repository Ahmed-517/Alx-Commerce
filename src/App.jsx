import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./scenes/home/HomeLayout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemDetails from "./scenes/item/ItemDetails";

import CartMenu from "./components/CartMenu";

import Checkout from "./scenes/checkout/Checkout";
import Login from "./scenes/seller/Login";
import RequestsTable from "./scenes/seller/RequestsTable";
import SellerProtectedRoute from "./scenes/seller/SellerProtectedRoute";
import ShoppingList from "./scenes/home/ShoppingList";
import Subscribe from "./scenes/home/Subscribe";

function App() {
  return (
    <div className="m-auto">
      <BrowserRouter>
        {/* <ScrollToTop /> */}

        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route
              path="/"
              element={
                <>
                  <ShoppingList />
                  <Subscribe />
                </>
              }
            />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="checkout" element={<Checkout />} />
            {/* <Route path="checkout/success" element={<Confirmation />} /> */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route
            path="seller"
            element={
              <SellerProtectedRoute>
                {/* <SellerDashboard /> */}
                <RequestsTable />
              </SellerProtectedRoute>
            }
          >
            {/* <Route index element={}/> */}
          </Route>
        </Routes>

        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
