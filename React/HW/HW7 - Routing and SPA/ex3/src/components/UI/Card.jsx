import styles from './Card.module.css';

const Card = ({className, children}) => {
  const classes = `${className} ${styles.card}`
  return <div className={classes}>{children}</div>
};

export default Card;