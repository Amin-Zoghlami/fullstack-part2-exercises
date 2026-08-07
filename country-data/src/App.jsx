import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [countryFilter, setCountryFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) =>
        setCountries(response.data.map((country) => country.name.common)),
      );
  }, []);

  if (countries === null) return <p>Loading...</p>;

  const handleFilterChange = (event) => {
    setSelectedCountry(null);
    setCountryFilter(event.target.value);
  };

  return (
    <div>
      <Filter
        onFilterChange={handleFilterChange}
        countryFilter={countryFilter}
      />
      <Countries
        countries={countries}
        countryFilter={countryFilter}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </div>
  );
};

export default App;
