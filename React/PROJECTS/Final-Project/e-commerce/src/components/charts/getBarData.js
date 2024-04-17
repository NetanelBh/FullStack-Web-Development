import { UseSelector, useSelector } from "react-redux";

const getBarData = () => {
  const products = useSelector(state => state.products.products);

  // 
  const data = [
    ["Total Quantity", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];

  return data;
}

export default getBarData