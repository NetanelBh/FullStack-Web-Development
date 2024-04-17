import styles from "./Customers.module.css";

import { useMemo } from "react";
import { useSelector } from "react-redux";

import GenericTable from "../../react-material-table/GenericTable";

const Customers = () => {
  const users = useSelector((state) => state.users.users);
  const orders = useSelector((state) => state.orders.orders);

  // Create in advance the inner table of the bought products
  const boughtColumns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Product",
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

  // Filter the list to exclude the admin user from displaying in tables
  const filteredUsers = users.filter((user) => user.admin === false);
  // Create a data per each customer to create a table row including inner table
  const usersData = filteredUsers.map((user) => {
    // Per each user, filter only its orders
    const userOrders = orders.filter((order) => {
      return user.id === order.userId;
    });

    // Merge all orders into single array
    const mergeOrders = userOrders
      .map((order) => {
        // Parse the orders list(store in DB as JSON.stringify)
        const productsList = JSON.parse(order.products);
        // In the end of the func, flat make it single array from array of arrays
        return productsList.map((product) => {
          return {
            name: product.name,
            qty: product.qty,
            date: order.purchased_date,
          };
        });
      })
      .flat();

    // Create inner table for each user
    const table = (
      <div className={styles.inner_table}>
        <GenericTable data={mergeOrders} columns={boughtColumns} />
      </div>
    );

    // Return new object with all info about each user including the inner table
    return {
      full_name: user.full_name,
      join_date: user.join_date,
      orders: table,
    };
  });

  //
  const columns = useMemo(
    () => [
      {
        accessorKey: "full_name",
        header: "Full Name",
        size: 100,
      },
      {
        accessorKey: "join_date",
        header: "Joined At",
        size: 100,
      },
      {
        accessorKey: "orders",
        header: "Bought Products",
        size: 300,
      },
    ],
    []
  );

  return (
    <div className={styles.main_container}>
      <h1>Customers</h1>
      <p />
      <GenericTable data={usersData} columns={columns} />
    </div>
  );
};

export default Customers;
