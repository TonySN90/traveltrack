// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.scss";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Einfache Preisgestaltung.
            <br />
            Nur 9€/Monat.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="img-2.webp" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
