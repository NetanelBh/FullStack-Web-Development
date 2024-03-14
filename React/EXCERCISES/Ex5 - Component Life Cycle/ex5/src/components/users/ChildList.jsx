import styles from './ChildList.module.css';

const ChildList = ({data}) => {
  return <ul>{data.map(e => {
    return <li key={e.title}>{e.title}</li>
  })}</ul>
};

export default ChildList;