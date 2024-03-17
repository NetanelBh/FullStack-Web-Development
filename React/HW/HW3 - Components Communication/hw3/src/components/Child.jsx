import styles from './Child.module.css';

const Child = ({movie}) => {
  return <div className={styles.container}>
    <h3>Name: {movie.name}</h3>
    <img src={movie.pic} alt='movie'></img>
  </div>
};

export default Child;