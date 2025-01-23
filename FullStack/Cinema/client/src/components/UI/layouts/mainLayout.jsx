import styles from "./mainLayout.module.css";

import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../genericComp/header";
import NavigationBar from '../navigateBar/navBar';

const MainLayout = () => {
    const navigate = useNavigate();

    const navButtons = JSON.parse(sessionStorage.getItem("mainHeaders")).headers;

    const logoutHandler = () => {
        sessionStorage.removeItem("mainHeaders");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("moviesHeaders");
        sessionStorage.removeItem("employeesHeaders");
        sessionStorage.removeItem("subscriptionsHeaders");

        navigate("/");
    };

    return (
        <>
            <div className={styles.bar_container}>
                <NavigationBar data={navButtons} />
                <img src="/logout.png" alt="logout image" className={styles.logout} onClick={logoutHandler}></img>
            </div>

            <div className={styles.content}>
                <Header text="Netanel's Cinema" />
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
