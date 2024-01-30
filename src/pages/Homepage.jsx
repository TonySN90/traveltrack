import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.scss";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Du bereist die Welt.
          <br />
          TravelTrack hält deine Abenteuer im Blick.
        </h1>
        <h2>
          Eine Weltkarte, die deinen Schritten auf der Spur ist. Vergiss nie
          deine wunderbaren Erlebnisse und zeige deinen Freunden, wie du die
          Welt durchstreift hast.
        </h2>

        <Link to="/login" className="cta">
          Start tracking
        </Link>
      </section>
    </main>
  );
}
