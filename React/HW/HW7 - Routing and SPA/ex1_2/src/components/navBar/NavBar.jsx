import styles from "./NavBar.module.css";

import { Link } from "react-router-dom";

const NavBar = ({onClick}) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/user" onClick={() => onClick('todos')}>Todos</Link>
          </li>

          <li>
            <Link to="/user" onClick={() => onClick('posts')}>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
