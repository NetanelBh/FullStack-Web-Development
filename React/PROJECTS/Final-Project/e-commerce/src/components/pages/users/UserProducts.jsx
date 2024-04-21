import styles from "./UserProducts.module.css";

import { useSelector } from "react-redux";
import { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import SideDrawer from "../../drawer/SideDrawer";

const UserProducts = () => {
  const [priceBarValue, setPriceBarValue] = useState(0);
  const [filteredSearch, setFilteredSearch] = useState("");
  const cart = useSelector(state => state.cart);

  const priceBarChangeHandler = (event) => {
    setPriceBarValue(event.target.value);
  };

  const searchByTitleHandler = (event) => {};

  return (
    <div className={styles.main_container}>
      <SideDrawer />

      <div className={styles.filters_container}>
        <p className={styles.filter_header}>Filter by:</p>

        <div className={styles.category_filter_container}>
          <p>Category:</p>
          <select id="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <p className={styles.price_header}>Price:</p>
        <div className={styles.price_filter_container}>
          <Box sx={{ width: 135 }}>
            <Stack direction="row" sx={{ mb: 1 }} alignItems="center">
              <Slider
                step={1}
                max={1000}
                size="medium"
                aria-label="Price"
                onChange={priceBarChangeHandler}
              />
            </Stack>
          </Box>
          <p className={styles.price_value}>
            {String.fromCharCode(0x20aa)}
            {priceBarValue}
          </p>
        </div>

        <form className={styles.search_container}>
          <label htmlFor="search">Title:</label>
          <input id="search" type="text" onChange={searchByTitleHandler} />
        </form>
      </div>
    </div>
  );
};

export default UserProducts;
