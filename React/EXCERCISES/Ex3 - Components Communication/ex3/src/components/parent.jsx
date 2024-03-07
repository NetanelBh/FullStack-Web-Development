import styles from "./parent.module.css";

const Parent = ({ names }) => {
  return (
    <div className={styles.container}>
      <h1>Parent Component</h1>
      
      <ul>
        {names.map((name, i) => {
          return (
            <li key={i}>
              {name.name} is {name.age} years old, lives in {name.city} and He
              is {name.isAdult ? "" : "not"} an adult
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Parent;
