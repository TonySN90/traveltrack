import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="Traveltrack logo" className={styles.logo} />;
    </Link>
  );
}

export default Logo;
