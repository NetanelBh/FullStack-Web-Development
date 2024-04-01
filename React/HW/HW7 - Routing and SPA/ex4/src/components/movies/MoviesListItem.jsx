import styles from './MoviesListItem.module.css';

const MoviesListItem = ({movie, onMouseHover}) => {
  return (
    <li>
      <p>Name: <span>{movie.name}</span></p>
      <p onMouseOver={() => onMouseHover(movie.id)} className={styles.move_mouse}>Move Mouse Here</p>
    </li>
  )
}

export default MoviesListItem