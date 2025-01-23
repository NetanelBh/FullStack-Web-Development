import styles from "./WebContentLayout.module.css";
import { Outlet, useLocation } from "react-router-dom";

import WebContentNavigationBar from "../navigateBar/WEbContentNavigationBar";

const WebContentLayout = () => {
    // Get the current path location to determine which navigation bar to display
    const location = useLocation().pathname;
    let navTabs = [];

    if (location.includes("movies")) {
        navTabs = [...JSON.parse(sessionStorage.getItem("moviesHeaders")).headers];
    } else if (location.includes("employees")) {
        navTabs = [...JSON.parse(sessionStorage.getItem("employeesHeaders")).headers];
    } else {
        navTabs = [...JSON.parse(sessionStorage.getItem("subscriptionsHeaders")).headers];
    }

    return (
        <div className={styles.emp_container}>
            <WebContentNavigationBar data={navTabs} />

            <Outlet />
        </div>
    );
};

export default WebContentLayout;
