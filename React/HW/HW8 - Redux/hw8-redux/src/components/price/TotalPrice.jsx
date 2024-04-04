import styles from "./TotalPrice.module.css";

import { useSelector } from "react-redux";

const TotalPrice = () => {
  const products = useSelector((state) => state.products);

  const totalPrice = products.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
  }, 0);

  return (
    <div className={styles.container}>
      <h1>Total Price: {totalPrice}</h1>
    </div>
  );
};

export default TotalPrice;
