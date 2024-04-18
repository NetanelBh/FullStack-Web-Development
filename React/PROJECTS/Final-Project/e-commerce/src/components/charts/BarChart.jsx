import styles from "./BarChart.module.css";

import { useState } from "react";
import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

import getBarData from "./getBarData";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
  const users = useSelector((state) => state.users.users);
  const [selectedCustomer, setSelectedCustomer] = useState();

  const selectedCustomerHandler = (event) => {
    const user = users.find((user) => user.full_name === event.target.value);
    setSelectedCustomer(user.id);
  };

  const data = getBarData(selectedCustomer);

  return (
    <div className={styles.chart_container}>
      <select className={styles.select} onChange={selectedCustomerHandler}>
        <option>Select Customer</option>
        <option>Galit Ben hamo</option>
        <option>Rami Ohana</option>
      </select>
      {selectedCustomer && <CanvasJSChart options={data} />}
    </div>
  );
};

export default BarChart;
