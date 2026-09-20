const Header = (props) => {
  return <p>
    {props.coursename}
    </p>;
};

const Content = (props) => {
  return(
    <div>
      <p>{props.part[0].name}: {props.part[0].exercise}</p>
      <p>{props.part[1].name}: {props.part[1].exercise}</p>
    </div>
  );
};

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises: {props.part[0].exercise + props.part[1].exercise + props.part[2].exercise}</p>
    </div>
  );
}

const App = () => {
  const course = "Half Stack application development";

  const part = [
    {
      name: "Fundamentals of React",
      exercise: 10,
    },
    {
      name: "Using props to pass data",
      exercise: 7,
    },
    {
      name: "State of a component",
      exercise: 14,
    },
  ];

  return (
    <div>
      <Header coursename={course} />
      <Content part={part} />
      <Total part={part} />
    </div>
  );
};

export default App;
