import styles from "./AdminProductItem.module.css";

import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import Card from "../../UI/Card";
import Input from "../../form/Input";
import Button from "../../UI/Button";

import { updateDocument } from "../../utils/firebaseActions";
import GenericTable from "../../react-material-table/GenericTable";

const AdminProductItem = ({ product }) => {
  const titleRef = useRef();
  const priceRef = useRef();
  const imageLinkRef = useRef();
  const descriptionRef = useRef();

  const users = useSelector((state) => state.users.users);
  const orders = useSelector((state) => state.orders.orders);
  const categories = useSelector((state) => state.categories.categories);

  // Get all categories except the current product category(for dropdown list)
  const filteredCategories = categories.filter((category) => {
    return category.name !== product.category;
  });

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

  // first, merge all orders into one flat array (array of objects)
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

  const tableData = filtereOrders.map((order) => {
    const userName = users.find((user) => user.id === order.userId);
    return {
      name: userName.full_name,
      qty: order.qty,
      date: order.date,
    };
  });

  const addOrderHandler = (event) => {
    event.preventDefault();

    // Check 2 conditions before adding the edited product
    const newProduct = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      category: categoryRef.current.value,
      description: descriptionRef.current.value,
      image_link: "http://Belt"
    };

    updateDocument('products', product.id, newProduct);
  };

  return (
    <form onSubmit={addOrderHandler}>
      <Card className={styles.li}>
        <Input
          title="Title:"
          type="text"
          className={styles.row_input}
          ref={titleRef}
          initInput={product.title}
        />
        <Input
          title="Price:"
          type="text"
          className={styles.column_input}
          ref={priceRef}
          initInput={product.price}
        />

        <div className={styles.category}>
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="clothing">{product.category}</option>
            {filteredCategories.map((category) => {
              return (
                <option value={category.name.toLowerCase()} key={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <Input
          title="Link to pic:"
          type="text"
          className={styles.column_input}
          ref={imageLinkRef}
          initInput={product.image_link}
        />

        <div className={styles.description}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            defaultValue={product.description}
            ref={descriptionRef}
          />
        </div>
        <div className={styles.table_container}>
          <GenericTable data={tableData} columns={boughtcolumns} />
        </div>

        <Button title="Save" type="submit" className={styles.btn} />
      </Card>
    </form>
  );
};

export default AdminProductItem;
