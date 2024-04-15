import styles from "./AdminProducts.module.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Card from "../../UI/Card";
import Input from "../../form/Input";
import Button from "../../UI/Button";
import { updateDocument } from "../../utils/firebaseActions";
import GenericTable from "../../react-material-table/GenericTable";

const AdminProducts = () => {
  const titleRef = useRef();
  const priceRef = useRef();
  const imageLinkRef = useRef();
  const descriptionRef = useRef();

  const users = useSelector((state) => state.users.users);
  const orders = useSelector((state) => state.orders.orders);
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);

  const [tableData, setTableData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (categories[0]) {
      setSelectedCategory(categories[0].name);
    }
  }, [categories]);

  const boughtcolumns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 75,
      },
      {
        accessorKey: "qty",
        header: "Qty",
        size: 75,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 75,
      },
    ],
    []
  );

  // Create an array for each purchased order in DB to create the table
  useEffect(() => {
    setTableData(
      products.map((product) => {
        // Insert all orders into a single array
        const singleOrdersArray = orders
          .map((order) => {
            const parsedOrders = JSON.parse(order.products);
            return parsedOrders.map((o) => {
              return {
                prodName: o.name,
                qty: o.qty,
                date: order.purchased_date,
                userId: order.userId,
              };
            });
          })
          .flat();

        // Filter the orders array according to product name
        const filtereOrders = singleOrdersArray.filter((order) => {
          return product.title === order.prodName;
        });

        const finalObj = filtereOrders.map((order) => {
          const userName = users.find((user) => user.id === order.userId);
          return {name: userName.full_name, qty: order.qty, date: order.date};
        });  
        
        return finalObj;
      }).flat()
    );
  }, [products]);

  console.log(tableData);

  return (
    <div className={styles.main_container}>
      <h1>Products</h1>
      <Card className={styles.li}>
        <Input
          title="Title:"
          type="text"
          className={styles.row_input}
          ref={titleRef}
        />
        <Input
          title="Price:"
          type="text"
          className={styles.column_input}
          ref={priceRef}
        />

        <div className={styles.category}>
          <label>Category: </label>
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="clothing">Clothing</option>
            <option value="toys">Toys</option>
            <option value="jewelry">Jewelry</option>
          </select>
        </div>
        <Input
          title="Link to pic:"
          type="text"
          className={styles.column_input}
          ref={imageLinkRef}
        />

        <div className={styles.description}>
          <label>Description:</label>
          <textarea defaultValue="sldkfjs" ref={descriptionRef} />
        </div>
        {/* <GenericTable data={tableData} columns={boughtcolumns} /> */}

        <Button />
      </Card>
    </div>
  );
};

export default AdminProducts;
