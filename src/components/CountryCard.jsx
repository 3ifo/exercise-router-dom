import { Link } from "react-router-dom";

export default function ({ name, flags, population, cca2 }) {
  return (
    <Link to={`${cca2}`}>
      <div className="country-card">
        <h3>{name.common}</h3>
        <figure>
          <img src={flags.svg} alt="" />
        </figure>
        <p>Population: {population}</p>
      </div>
    </Link>
  );
}
