import styles from "./UserData.module.css";

import Card from "../UI/Card";

const UserData = ({ data }) => {
  return (
    <Card className={styles.container}>
      <div className={styles.size}>
        <p className={styles.special}>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        {data.titles && <h4>Todos Titles: </h4>}
      </div>
      <ol>
        {data.titles && data.titles.map(title => <li key={title} className={styles.size}>{title}</li>)}
      </ol> <br/>
    </Card>
  );
};

export default UserData;
