import React from "react";

const Part = ({ part }) => {
  return (
    <>
          <p>{part.name}: <b>{part.exercises}</b> </p>
    </>
  );
};

export default Part;
