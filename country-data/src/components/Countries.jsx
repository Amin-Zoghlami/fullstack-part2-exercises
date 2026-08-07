import Country from "./Country";

const Countries = ({
  countries,
  countryFilter,
  selectedCountry,
  setSelectedCountry,
}) => {
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(countryFilter.toLowerCase()),
  );

  if (filteredCountries.length === 0) return <p>No matches</p>;

  if (filteredCountries.length === 1)
    return <Country countryName={filteredCountries[0]} />;

  if (filteredCountries.length <= 10) {
    if (selectedCountry !== null)
      return <Country countryName={selectedCountry} />;
    return (
      <ul>
        {filteredCountries.map((country, i) => (
          <li key={i}>
            {country}{" "}
            <button
              onClick={() => {
                setSelectedCountry(country);
              }}
            >
              Show
            </button>
          </li>
        ))}
      </ul>
    );
  }
  return <p>Too many matches</p>;
};

export default Countries;
