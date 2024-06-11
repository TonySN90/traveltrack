import styles from "./AppNav.module.scss";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Orte</NavLink>
        </li>
        <li>
          <NavLink to="countries">Länder</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
