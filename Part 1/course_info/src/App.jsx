const Header = (props) => {
  return <p>
    {props.coursename.name}
    </p>;
};

const Content = (props) => {
  return(
    <div>
      <p>{props.course.part[0].name}: {props.course.part[0].exercise}</p>
      <p>{props.course.part[1].name}: {props.course.part[1].exercise}</p>
    </div>
  );
};

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises: {props.course.part[0].exercise + props.course.part[1].exercise + props.course.part[2].exercise}</p>
    </div>
  );
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    part : [
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
      }
    ]
  }

  return (
    <div>
      <Header coursename={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;