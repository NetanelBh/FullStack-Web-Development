import { useSelector } from "react-redux";

const getBarData = (userId) => {
  const orders = useSelector((state) => state.orders.orders);

  const filteredOrders = orders.filter((order) => order.userId === userId);
  console.log(filteredOrders);
  
  // MAP THE FILTERED ORDERS ARRAY AND GET ALL THE PRODUCTS AND QUANTITY
  // SAVE IT AS DATA AND PASS IT TO DATA IN DETAILS OBJECT

  const details = {
    height: 500,
    title: {
      text: "Products Quantity Per Customer",
      fontStyle: "italic",
      margin: 50,
      fontSize: 30,
    },
    axisY: {
      margin: 30,
    },
    axisX: {
      margin: 10,
    },
    backgroundColor: "#DAF5FF",
    theme: "light2", // "light1", "dark1", "dark2"
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };

  return details;
};

export default getBarData;
