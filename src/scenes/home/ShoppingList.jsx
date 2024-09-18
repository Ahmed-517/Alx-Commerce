import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";
import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

export default function ShoppingList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px");
  console.log("items are", items);

  function handleChange(newValue) {
    setValue(newValue);
  }

  async function getItems() {
    let { data: alx_commerce_items, error } = await supabase
      .from("alx_commerce_items")
      .select("*");

    /*
        item_name
        short_description
        long_description
        item_image
        item_price
        item_category
      */

    // const itemsJson = await items.json();
    dispatch(setItems(alx_commerce_items));
  }

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter(
    (item) => item.item_category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.item_category === "newArrivals"
  );
  const bestSellerItems = items.filter(
    (item) => item.item_category === "bestSellers"
  );

  return (
    // Box, Typography, Tabs are from MUI
    <div
      className="w-[80%] mx-auto my-20"
      style={{ width: window.innerWidth < 768 ? "100%" : "80%" }}
    >
      <h3 className="text-center text-3xl font-bold">
        Explore <b>Our Products</b>
      </h3>

      <div className="mt-6 mb-6 flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <button
              className={`${
                value === "all" ? "text-primary" : "text-gray-500"
              }`}
              onClick={() => handleChange("all")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`${
                value === "newArrivals" ? "text-primary" : "text-gray-500"
              }`}
              onClick={() => handleChange("newArrivals")}
            >
              New Arrivals
            </button>
          </li>
          <li>
            <button
              className={`${
                value === "bestSellers" ? "text-primary" : "text-gray-500"
              }`}
              onClick={() => handleChange("bestSellers")}
            >
              Best Sellers
            </button>
          </li>
          <li>
            <button
              className={`${
                value === "topRated" ? "text-primary" : "text-gray-500"
              }`}
              onClick={() => handleChange("topRated")}
            >
              Top Rated
            </button>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,_300px)] gap-y-5 gap-x-[1.33%] justify-around">
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellerItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </div>
    </div>
  );
}
