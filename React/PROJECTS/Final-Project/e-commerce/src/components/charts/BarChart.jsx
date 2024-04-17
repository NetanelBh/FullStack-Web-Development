import styles from './BarChart.module.css';

import { Chart } from "react-google-charts";

const BarChart = ({ data, options }) => {
  return (
    <div className={styles.chart_container} >
      <Chart
        chartType="Bar"
        width="100%"
        height="600px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarChart;
