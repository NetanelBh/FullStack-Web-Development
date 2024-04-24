import styles from "./UserProductItem.module.css";

import Card from "../../UI/Card";
import Button from "../../UI/Button";

const UserProductItem = ({ product }) => {
  return (
    <Card className={styles.item_container}>
      <div className={styles.description}>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <h2>Price: {`${String.fromCharCode(0x20aa)}${product.price}`}</h2>
        <h2>In Stock: {product.stock}</h2>

        {/* CREATE HERE COMPONENT OF "PRODUCTS AMOUNT ACTIONS AND SEND STYLES FROM OUTSIDE" */}
        <div>
          <Button title='-'/>
          <Button title='Amount'/>
          <Button title='+'/>
        </div>
      </div>

      <div className={styles.description}>
        <h1>{product.title}</h1>
        <h2>{product.description}</h2>
        <h2>Price: {`${String.fromCharCode(0x20aa)}${product.price}`}</h2>
        <h2>In Stock: {product.stock}</h2>
      </div>

      <div>
        <h1>{product.title}</h1>
      </div>
    </Card>
  );
};

export default UserProductItem;
