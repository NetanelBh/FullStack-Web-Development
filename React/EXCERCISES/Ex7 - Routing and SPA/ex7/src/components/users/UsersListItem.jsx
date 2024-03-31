import styles from './UsersListItem.module.css';

import { Link } from 'react-router-dom';

const UsersListItem = ({user}) => {
  const data = {name: user.name, email: user.email, city: user.address.city};

  return <li>
    <Link className={styles.link} to='/user' state={data} >{user.name}</Link>
  </li>
};

export default UsersListItem;