const Persons = ({ persons, filterString, onDeleteClick }) => {
  return (
    <div>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filterString.toLowerCase()),
          )
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
              <button onClick={() => onDeleteClick(person.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Persons;
