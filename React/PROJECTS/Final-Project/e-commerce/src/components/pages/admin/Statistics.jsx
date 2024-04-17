import styles from './Statistics.module.css';

import PieChart from "../../charts/PieChart";
import getPieData from "../../charts/getPieData";
import getPieOptions from "../../charts/getPieOptions";

import BarChart from "../../charts/BarChart";
import getBarData from "../../charts/getBarData";
import getBarOptions from "../../charts/getBarOptions";

const Statistics = () => {
  // const users = useSelector((state) => state.users);

  const pieData = getPieData();
  const pieOptions = getPieOptions();

  const barData = getBarData();
  const barOptions = getBarOptions();

  return (
    <div className={styles.charts_container}>
      <PieChart data={pieData} options={pieOptions} />
      <BarChart data={barData} options={barOptions} />
    </div>
  );
};

export default Statistics;
