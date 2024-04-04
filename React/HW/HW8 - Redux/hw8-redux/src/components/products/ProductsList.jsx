import styles from "./ProductsList.module.css";

import { useSelector } from "react-redux";

import ProductsListItem from "./ProductsListItem";

const ProductsList = () => {
  const products = useSelector((state) => state.products);

  let content = <h2 className={styles.no_products}>No products To Show</h2>;
  if (products.length > 0) {
    content = products.map((p, i) => {
      return <ProductsListItem product={p} key={i} />;
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Current Products in Order</h1>
      <ul className={styles.list}>{content}</ul>
    </div>
  );
};

export default ProductsList;
