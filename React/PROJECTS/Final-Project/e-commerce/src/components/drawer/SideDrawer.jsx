import styles from "./SideDrawer.module.css";

import { useSelector, useDispatch } from "react-redux";
import { usersActions } from "../store/cartSlice";

import Button from "../UI/Button";
import openCartSvg from "../utils/openCartSvg";
import closeCartSvg from "../utils/closeCartSvg";

const SideDrawer = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartArrowClickHandler = () => {
    dispatch(usersActions.showCart());
  };

  return (
    <>
      {!cart.isOpen && (
        <div className={styles.close_mode}>
          <Button
            className={styles.arrow_btn}
            title={openCartSvg()}
            type="button"
            onClick={cartArrowClickHandler}
          />
        </div>
      )}

      {cart.isOpen && (
        <div className={styles.open_mode}>
          <h1>Cart:</h1>
          <h2>Total: {`${String.fromCharCode(0x20aa)}${""}`}</h2>
          <Button title='Order' className={styles.order_btn} />
          <Button
            className={`${styles.arrow_btn} ${styles.close_btn}`}
            title={closeCartSvg()}
            type="button"
            onClick={cartArrowClickHandler}
          />
        </div>
      )}
    </>
  );
};

export default SideDrawer;
