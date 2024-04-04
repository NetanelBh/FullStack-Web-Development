import styles from "./NewProduct.module.css";

import { useDispatch } from "react-redux";
import { productsActions } from "../store/productsSlice";

import Button from "../UI/Button";
import { useRef } from "react";

const NewProduct = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const priceRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const obj = {
      name: nameRef.current.value,
      price: +priceRef.current.value
    };

    dispatch(productsActions.addProduct(obj));
  };

  return <div className={styles.container}>
    <h1>Add New Product</h1>
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.input}>
        <label htmlFor="p_name">Name: </label>
        <input id="p_name" type="text" ref={nameRef}/>
      </div>
      <div className={styles.input}>
        <label htmlFor="p_price">Price: </label>
        <input id="p_price" type="number" ref={priceRef}/>
      </div>
      <Button type='submit' title='Add' className={styles.btn}/>
    </form>
  </div>;
};

export default NewProduct;
