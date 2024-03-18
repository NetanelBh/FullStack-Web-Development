import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import styles from "./Table.module.css";

import TableRow from "./TableRow";
import PacmanLoading from "../components/UI/PacmanLoading";

const USERS_URL = "https://fakestoreapi.com/users";
const ORDERS_URL = "https://fakestoreapi.com/carts";
const IMAGES_URL = "https://fakestoreapi.com/products";

const Table = () => {
  const [purchases, setPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const users = await axios.get(USERS_URL);
      const cart = await axios.get(ORDERS_URL);
      const images = await axios.get(IMAGES_URL);

      const purchaseList = users.data.map((user) => {
        const returendObj = {};
        // Extract the full name and email from the user
        const fullName = `${user.name.firstname} ${user.name.lastname}`;
        returendObj.name = fullName;
        returendObj.email = user.email;

        // Get the user purchased products from the url
        const filteredProd = cart.data.filter(
          (prod) => prod.userId === user.id
        );
        const prodIds = filteredProd.map((prod) => {
          return prod.products.map((p) => p.productId);
        });

        // Merge the products ids
        let nonDuplicatesIds = [];
        prodIds.forEach((prodArr) => {
          nonDuplicatesIds = [...nonDuplicatesIds, ...prodArr];
        });

        // Create a set of products ids without duplicates
        const updatedProdIds = [...new Set(nonDuplicatesIds)];
        // Save the products images according to their ids
        const productsImages = updatedProdIds.map((productId) => {
          const imageObj = images.data.find((img) => img.id === productId);
          return imageObj.image;
        });

        returendObj.products = productsImages;
        return returendObj;
      });

      setPurchases(purchaseList);
    } catch (error) {
      throw new Error(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading && <PacmanLoading color="blue" />}
      {!isLoading && (
        <ul className={styles.grid_container}>
          <li><p>Name</p></li>
          <li><p>Email</p></li>
          <li><p>Products</p></li>
          {purchases.map((purchase, i) => (
            <TableRow key={i} data={purchase} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Table;
