// import MainCarousel from "./MainCarousel";

import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
