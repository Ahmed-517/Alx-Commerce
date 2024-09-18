import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";

import { addToCart } from "../state";
import { DisabledByDefault } from "@mui/icons-material";
import { auto } from "@popperjs/core";

export default function Item({ item, width }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { id, item_category, item_price, item_name, item_image } = item;

  return (
    <Box width={width}>
      <Box
        position="relative"
        sx={{
          margin: auto,
          width: { xs: "150px", md: "300px", lg: "300px" },
          height: { xs: "200px", md: "400px", lg: "400px" },
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Link to={`/item/${id}`}>
          <img
            alt={item_name}
            width="300px"
            height="400px"
            // width="100%"
            // height="100%"
            // sx={{
            //   width: { xs: "50px", lg: "300px", md: '100px' },
            //   height: { xs: "50px", lg: "400px" },
            // }}
            src={item_image}
            // onClick={() => navigate(`/item/${id}`)}
            style={{ cursor: "pointer" }}
          />
        </Link>

        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/* AMOUNT */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>

              <Typography color={shades.primary[300]}>{count}</Typography>

              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            {/* BUTTON */}
            <Button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {item_category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${item_price}</Typography>
      </Box>
    </Box>
  );
}
