import styles from './productsTable.module.css';

import RowTable from './rowTable';
import HeaderTable from './headerTable';

const ProductsTable = (props) => {
  const titles = ['Name', 'Price', 'Color'];
  console.log(props.products);

  return <table className={styles.table}>
    <HeaderTable titles={titles}/>
    <RowTable products={props.products}/>
  </table>
};

export default ProductsTable;