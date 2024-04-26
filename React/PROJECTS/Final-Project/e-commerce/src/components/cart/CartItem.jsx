import styles from "./CartItem.module.css";

import { useDispatch } from "react-redux";
import { usersActions } from "../store/cartSlice";

import Card from "../UI/Card";
import Button from "../UI/Button";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const totalPrice = product.qty * +product.price;

  const incrementHandler = () => {
    dispatch(
      usersActions.increase({
        id: product.id,
        price: product.price,
        name: product.title,
      })
    );
  };
  const decrementHandler = () => {
    dispatch(
      usersActions.decrease({
        id: product.id,
        price: product.price,
        name: product.title,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(usersActions.removeProduct(product.id));
  };

  return (
    <Card className={styles.container}>
      <span className={styles.title}>{product.title}</span>

      <Button
        className={styles.action_btn}
        title="-"
        type="button"
        onClick={decrementHandler}
      />

      <span className={styles.qty_badge}>{product.qty}</span>

      <Button
        className={styles.action_btn}
        title="+"
        type="button"
        onClick={incrementHandler}
      />

      <span className={styles.price_section}>
        {" "}
        - Total: {String.fromCharCode(0x20aa)}
        {totalPrice}
      </span>

      <Button
        title="X"
        type="button"
        className={styles.cancel_btn}
        onClick={removeItemHandler}
      />
    </Card>
  );
};

export default CartItem;
