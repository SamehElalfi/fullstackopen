import React from "react";

const Header = (props) => (
  <>
    {" "}
    <h1> {props.course} </h1>{" "}
  </>
);
const Part = (props) => (
  <>
    <p>
      {" "}
      {props.name} {props.exercises}{" "}
    </p>{" "}
  </>
);

const Content = (props) => (
  <>
    <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
    <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
    <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
  </>
);

const Total = (props) => (
  <>
    <p> Number of exercises {props.total} </p>{" "}
  </>
);

const App = () => {
  const course = "Half Stack application development";
  const allParts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  const exercisesReducer = (total, index) => { return total + index.exercises };

  return (
    <div>
      <Header course={course} />
      <Content parts={allParts} />
      <Total total={allParts.reduce(exercisesReducer, 0)} />
    </div>
  );
};

export default App;
