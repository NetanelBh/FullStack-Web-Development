import styles from "./navBar.module.css";

import { NavLink, useNavigate } from "react-router-dom";
import Button from "../button/button";

const NavigationBar = () => {
    const navigate = useNavigate();

    const navButtons = JSON.parse(sessionStorage.getItem("headers")).headers;

    const logoutHandler = () => {
        sessionStorage.removeItem("headers");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("token");

        navigate("/");
    };

    return (
        <nav className={styles.bar_container}>
            <ul className={styles.list}>
                {navButtons.map((navButton) => {
                    return (
                        <li key={navButton.header} className={styles.link_btn}>
                            <NavLink
                                to={navButton.navigateTo}
                                end
                                className={({ isActive }) => (isActive ? styles.active : undefined)}
                            >
                                {navButton.header}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            <img src="/logout.png" alt="logout image" className={styles.logout} onClick={logoutHandler}></img>
        </nav>
    );
};

export default NavigationBar;
