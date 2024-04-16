import styles from "./AdminProducts.module.css";

import { useSelector } from "react-redux";
import AdminProductItem from "./AdminProductItem";

const AdminProducts = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className={styles.main_container}>
      <h1>Products</h1>
      {products.map((product) => (
        <AdminProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AdminProducts;
