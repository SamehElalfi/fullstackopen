import React from "react";
import Part from "./Part";

const Course = ({ course }) => {
  return (
    <>
      {course.parts.map(part => <Part part={part} key={part.id} />)}
      <p>Total of <b>{course.parts.reduce((total, part)=> part.exercises + total, 0)} exercises</b></p>
    </>
  );
};

export default Course;
