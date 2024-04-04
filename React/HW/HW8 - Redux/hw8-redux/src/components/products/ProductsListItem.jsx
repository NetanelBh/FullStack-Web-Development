import styles from "./ProductsListItem.module.css";

import { useDispatch } from "react-redux";
import { productsActions } from "../store/productsSlice";

import Card from "../UI/Card";
import Button from "../UI/Button";

const ProductsListItem = ({ product }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(productsActions.removeProduct(product.name));
  };

  return (
    <Card className={styles.li_card}>
      <li className={styles.li}>
        <div className={styles.li_container}>
          <h2 className={`${styles.li_content} ${styles.h2}`}>Product Data</h2>
          <h3 className={styles.li_content}>Name: {product.name}</h3>
          <h3 className={styles.li_content}>Price: {product.price}</h3>
          <Button
            title="Remove"
            type="button"
            className={styles.btn}
            onClick={removeHandler}
          />
        </div>
      </li>
    </Card>
  );
};

export default ProductsListItem;
