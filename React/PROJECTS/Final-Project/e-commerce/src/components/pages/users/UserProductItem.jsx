import styles from "./UserProductItem.module.css";

import { useState } from "react";

import Card from "../../UI/Card";
import Button from "../../UI/Button";

const UserProductItem = ({ product }) => {
  const [qty, setQty] = useState(0);

  // CALCULATE THE NUM OF USERS BOUGHT THIS PRODUCT ACCORDING THEIR SEE_ORDERS FLAG

  const decrementQtyHandler = () => {
    if(qty === 0) return;
    setQty(latestState => latestState - 1);

    // UPDATE THE QTY OF THE CART FOR THIS PRODUCT
  };

  const incrementQtyHandler = () => {
    setQty(latestState => latestState + 1);

    // UPDATE THE QTY OF THE CART FOR THIS PRODUCT
  };

  return (
    <Card className={styles.item_container}>
      <div className={styles.description}>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <h2>Price: {`${String.fromCharCode(0x20aa)}${product.price}`}</h2>
        <h2>In Stock: {product.stock}</h2>

        <div className={styles.action_container}>
          <Button
            className={styles.action_btn}
            title="-"
            type="button"
            onClick={decrementQtyHandler}
          />
          <span className={styles.amount_display}>{qty}</span>
          <Button
            className={styles.action_btn}
            title="+"
            type="button"
            onClick={incrementQtyHandler}
          />
        </div>
      </div>

      <img
        src={product.image_link}
        alt={product.description}
        className={styles.img}
      />

      <p className={styles.bought}>
        <span>Bought:</span> {15}
      </p>
    </Card>
  );
};

export default UserProductItem;
