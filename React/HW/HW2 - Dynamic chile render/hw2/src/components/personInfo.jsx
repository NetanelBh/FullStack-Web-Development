import styles from './personInfo.module.css';

import TaskList from './taskList';

const PersonInfo = (props) => {
  return <div className={styles.container}>
    <h2>{props.person.name}</h2>
    <h2>Tasks:</h2>
    <TaskList tasks={props.person.tasks}/>
  </div>
};

export default PersonInfo;