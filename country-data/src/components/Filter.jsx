const Filter = ({ onFilterChange, countryFilter }) => {
  return (
    <div>
      find countries{" "}
      <input onChange={onFilterChange} value={countryFilter}></input>
    </div>
  );
};

export default Filter;
