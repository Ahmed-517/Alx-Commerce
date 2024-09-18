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

  function handleChange(event, newValue) {
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
    <Box
      width="80%"
      sx={{
        width: { xs: "100%", md: "80%", lg: "80%" },
      }}
      margin="80px auto"
    >
      <Typography variant="h3" textAlign="center">
        Explore <b>Our Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          mb: "25px",
          mt: "25px",
          "& .MuiTabs-flexContainer": {
            // flexWrap: "wrap",
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="New Arrivals" value="newArrivals" />
        <Tab label="Best Sellers" value="bestSellers" />
        <Tab label="Top Rated" value="topRated" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        // auto fill every product with 300px
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
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
      </Box>
    </Box>
  );
}
