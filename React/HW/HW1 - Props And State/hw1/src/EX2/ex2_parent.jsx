import { useState } from "react";

import styles from "./ex2_parent.module.css";

import Child from "./child";

const Parent = () => {
  const [products, setProducts] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodColor, setProdColor] = useState("");
  const [isShow, setIsShow] = useState(false);

  const showClickHandler = () => {
    setIsShow((latestIsShow) => !latestIsShow);
  };

  const saveProductHandler = (event) => {
    event.preventDefault();

    if (
      prodName.trim().length > 0 &&
      prodPrice.trim().length > 0 &&
      prodColor.trim().length > 0
    ) {
      const prod = {
        name: prodName,
        price: prodPrice,
        color: prodColor,
      };

      setProducts((latestProducts) => {
        return [...latestProducts, prod];
      });
    }

    setProdName("");
    setProdPrice("");
    setProdColor("");
  };

  const changeNameHandler = (event) => {
    setProdName(event.target.value);
  };

  const changePriceHandler = (event) => {
    setProdPrice(event.target.value);
  };

  const changeColorHandler = (event) => {
    setProdColor(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <form className={styles.parent} onSubmit={saveProductHandler}>
        <div className={styles.input}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={changeNameHandler}
            value={prodName}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            min={0}
            onChange={changePriceHandler}
            value={prodPrice}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="color">Color</label>
          <input
            id="color"
            type="text"
            onChange={changeColorHandler}
            value={prodColor}
          />
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.save}>
            Save
          </button>
          <button
            className={!isShow ? styles.show : styles.hide}
            onClick={showClickHandler}
            type="button"
          >
            {!isShow ? "Show" : "Hide"}
          </button>
        </div>
      </form>

      {console.log(products.length)}
      {isShow && products.length > 0 && <Child products={products} />}
      {isShow && products.length === 0 && <h2>No products to show</h2>}
    </div>
  );
};

export default Parent;
