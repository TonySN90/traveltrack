import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useState } from "react";
import styles from "./City.module.scss";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading, setIsloading } = useCities();
  const { cityName, emoji, date, notes } = currentCity;
  const [flag, setFlag] = useState(null);
  const [isFlagLoaded, setIsFlagLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // setIsloading(true);
        await getCity(id);
        if (emoji && !isFlagLoaded) {
          const flagURL = `https://flagcdn.com/w20/${emoji.toLowerCase()}.png`;
          const image = new Image();

          image.onload = () => {
            setFlag(flagURL);
            setIsFlagLoaded(true);
            // setIsloading(false);
          };
          image.src = flagURL;
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [id, emoji]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>
            {isFlagLoaded && <img src={flag} alt={`Flag of ${cityName}`} />}
          </span>
          {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
