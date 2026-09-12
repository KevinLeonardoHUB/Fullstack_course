const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises:{" "}
        {props.part[0].exercise +
          props.part[1].exercise +
          props.part[2].exercise}
      </p>
    </div>
  );
};

const App = () => {
  const part = [
    { name: "Fundamentals of React", exercise: 10 },
    { name: "Using props to pass data", exercise: 7 },
    { name: "State of a component", exercise: 14 },
  ];

  return (
    <div>
      <Header title="Half Stack application development" />
      <Content part={part} />
      <Total part={part} />
    </div>
  );
};

export default App;