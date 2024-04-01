import styles from "./DetailsPage.module.css";

import { useLocation } from "react-router-dom";

import Card from "../UI/Card";

const DetailsPage = () => {
  const data = useLocation();

  return (
    <Card className={styles.container}>
      <div className={styles.details}>
        <p>
          {data.state.firstName} {data.state.lastName}
        </p>
        <p>{data.state.city}</p>
      </div>
    </Card>
  );
};

export default DetailsPage;
