import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemDetails from "./scenes/item/ItemDetails";

import CartMenu from "./components/CartMenu";
import Checkout from "./scenes/checkout/Checkout";

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
        </Routes>

        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
