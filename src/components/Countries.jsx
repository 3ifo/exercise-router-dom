import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function () {
  const [countries, setCountries] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const result = await response.json();
      setCountries(result);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>Countries</h1>
      {countries.map((country, i) => {
        return <CountryCard key={`country${i}`} {...country} />;
      })}
    </>
  );
}
