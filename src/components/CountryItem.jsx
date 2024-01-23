import styles from "./CountryItem.module.scss";

function CountryItem({ country }) {
  const countryIcon = `https://flagcdn.com/w20/${country.emoji.toLowerCase()}.png`;
  return (
    <li className={styles.countryItem}>
      <span>
        <img src={countryIcon} alt={country.emoji} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
