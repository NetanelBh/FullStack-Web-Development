import styles from "./buttonsRow.module.css";

import Button from "./button";
import Card from "../UI/card";

const REQUESTS = ["GET", "POST", "PUT", "PATCH", "DELETE"];

const ButtonsRow = ({onClick}) => {
  return (
    <Card className={styles.row}>
      {REQUESTS.map((req) => (
        <Button title={req} key={req} style={req} onClick={() => onClick(req)} />
      ))}
    </Card>
  );
};

export default ButtonsRow;
