import styles from "./layout.module.css";

import { Outlet } from "react-router-dom";
import Header from "../../genericComp/header";
import ButtonAppBar from "../../UI/navigateBar/navBar";

const Layout = () => {
    return (
        <>
            <ButtonAppBar />
            <div className={styles.content}>
                <Header text="Netanel's Cinema" />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
