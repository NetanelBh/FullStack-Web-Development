import styles from './Layout.module.css';

import { Outlet } from "react-router-dom";

import NavBar from '../../UI/NavBar';

const Layout = () => {
  const navData = JSON.parse(sessionStorage.getItem('data'));
  return (
    <>
      <NavBar data={navData}/>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout;
