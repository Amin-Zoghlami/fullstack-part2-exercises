import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./Weather";

const Country = ({ countryName }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`,
      )
      .then((response) =>
        setCountry({
          name: response.data.name.common,
          capital: response.data.capital,
          area: response.data.area,
          languages: response.data.languages,
          flag: { png: response.data.flags.png, alt: response.data.flags.alt },
        }),
      );
  }, [countryName]);

  if (country === null) {
    return (
      <div>
        <h1>{countryName}</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital {country.capital}</p>
      <p>Area {country.area} km</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <img src={country.flag.png} alt={country.flag.alt} />
      <Weather city={country.capital} />
    </div>
  );
};

export default Country;
