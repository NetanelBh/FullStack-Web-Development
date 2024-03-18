import TaskListItem from './taskListItem';

const TaskList = (props) => {
  return <>
    {props.tasks.map((task) => {
      return <TaskListItem key={task.title} task={task}/>
    })}
  </>
};

export default TaskList;