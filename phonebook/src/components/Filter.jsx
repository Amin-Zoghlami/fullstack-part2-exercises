const Filter = ({ filterString, onFilterStringChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input value={filterString} onChange={onFilterStringChange} />
    </div>
  );
};

export default Filter;
