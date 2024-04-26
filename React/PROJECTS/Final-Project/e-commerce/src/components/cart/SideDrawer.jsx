import styles from "./SideDrawer.module.css";

import { useSelector, useDispatch } from "react-redux";
import { usersActions } from "../store/cartSlice";

import Button from "../UI/Button";
import CartItem from "./CartItem";
import openCartSvg from "../utils/openCartSvg";
import closeCartSvg from "../utils/closeCartSvg";

const SideDrawer = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartArrowClickHandler = () => {
    dispatch(usersActions.showCart());
  };
  
  const orderHandler = () => {
    // SEND REQUEST TO FIREBASE TO PALCE THE ORDER AND UPDATE STOCK
    
    // Clear the cart when place the order
    dispatch(usersActions.clearCart());
  };

  const nisSymbol = String.fromCharCode(0x20aa);

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
          <h1>Cart</h1>
          {cart.products.length === 0 && <h2>Empty Cart</h2>}
          {cart.products.length > 0 && (
            <>
              <div className={styles.items_container}>
                {cart.products.map((product) => {
                  return <CartItem key={product.id} product={product} />;
                })}
              </div>
              <h2>Total: {`${nisSymbol}${cart.totalPrice}`}</h2>
              <Button
                title="Order"
                className={styles.order_btn}
                type="button"
                onClick={orderHandler}
              />
            </>
          )}
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
