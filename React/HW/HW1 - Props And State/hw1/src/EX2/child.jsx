import styles from "./child.module.css";

import ProductsTable from "./table/productsTable";

const Child = (props) => {
  return (
    <div className={styles.main}>
      <ProductsTable products={props.products} />
    </div>
  );
};

export default Child;
