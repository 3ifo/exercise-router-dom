import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function () {
  const { code } = useParams();

  const [country, setCountry] = useState([]);

  const fetchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const result = await response.json();
      setCountry(result[0]);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const { name, flags, population } = country;

  return (
    <div>
      <h1>Questo è il country {code} </h1>
      <figure>
        <img src={flags.png} alt="" />
      </figure>
      <p>Population: {population}</p>
    </div>
  );
}
