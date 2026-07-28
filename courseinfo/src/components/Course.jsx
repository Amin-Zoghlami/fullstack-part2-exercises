const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ total }) => <h3>Number of exercises {total}</h3>;

const Course = ({ name, parts }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total total={parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  );
};

export default Course;
