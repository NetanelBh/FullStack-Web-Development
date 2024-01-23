import styles from './card.module.css';

const Card = ({children, className}) => {
  const classes = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;