import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.scss";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/preise">Preis</NavLink>
        </li>
        <li>
          <NavLink to="/produkt">Produkt</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
