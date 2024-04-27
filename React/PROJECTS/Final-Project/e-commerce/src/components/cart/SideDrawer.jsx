import styles from "./SideDrawer.module.css";

import { useState } from "react";
import { usersActions } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { addDocument } from "../utils/firebaseActions";

import Button from "../UI/Button";
import CartItem from "./CartItem";
import AlertDialog from "./dialog/Dialog";
import openCartSvg from "../utils/openCartSvg";
import closeCartSvg from "../utils/closeCartSvg";
import getCurrentDate from "../utils/getCurrentDate";

const SideDrawer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isPlacedOrder, setIsPlacedOrder] = useState(false);

  const data = sessionStorage.getItem('data');
  const user = JSON.parse(JSON.parse(data).title);

  const cartArrowClickHandler = () => {
    dispatch(usersActions.showCart());
  };

  const orderHandler = () => {
    const orderData = {
      purchased_date: getCurrentDate(),
      userId: user.id,
      products: JSON.stringify(cart.products)
    };

    // Add the order to firebase
    // addDocument('orders', orderData);

    // addDocument('orders', orderData);
    setIsPlacedOrder(true);

    // Clear the cart when place the order
    dispatch(usersActions.clearCart());
  };

  const cancelDialogClick = () => {
    setIsPlacedOrder(false);
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

      <AlertDialog
        title="Order Placed Successully!"
        message="Thanks for your purchase"
        buttonTitle="OK"
        openModal={isPlacedOrder}
        onCancel={cancelDialogClick}
      />
    </>
  );
};

export default SideDrawer;
