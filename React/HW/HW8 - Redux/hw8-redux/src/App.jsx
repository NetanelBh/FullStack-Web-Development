import styles from './App.module.css';

import TotalPrice from "./components/price/TotalPrice";
import NewProduct from "./components/products/NewProduct";
import ProductsList from "./components/products/ProductsList";

const App = () => {
  return (
    <div className={styles.main}>
      <TotalPrice />
      <ProductsList />
      <NewProduct />
    </div>
  );
};

export default App;
