import { useCities } from "../contexts/CitiesContext";
import styles from "./City.module.scss";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { currentCity, isLoading } = useCities();
  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;
  const countryIcon = `https://flagcdn.com/w20/${emoji.toLowerCase()}.png`;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>Ortsname</h6>
        <h3>
          <span>
            {countryIcon && (
              <img src={countryIcon} alt={`Flag of ${cityName}`} />
            )}
          </span>
          {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>Du warst in {cityName} am</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Deine Notizen</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Lerne was dazu</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Schau dir {cityName} auf Wikipedia an &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
