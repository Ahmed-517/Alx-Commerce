import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { shades } from "../theme.js";
import { setIsCartOpen } from "../state";

import { title } from "../constants";

// React Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <div className="flex items-center w-full h-[60px] bg-white bg-opacity-95 text-black fixed top-0 left-0 z-10">
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="text-secondary-500 hover:cursor-pointer"
          >
            {title}
          </div>

          <div className="flex justify-between space-x-5 z-10">
            <button className="text-black">
              <SearchOutlined />
            </button>

            <button className="text-black">
              <PersonOutline />
            </button>

            <button
              onClick={() => dispatch(setIsCartOpen({}))}
              className="text-black relative"
            >
              {cart.length > 0 && (
                <span className="absolute right-1 top-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
              <ShoppingBagOutlined />
            </button>

            <button className="text-black">
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
