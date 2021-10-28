import React from "react";

function Names({ names }) {
  return (
    <>
      <h2>Numbers</h2>
      {names.map((person, index) => (
        <p key={index}>
          {person.name} - {person.phone}
        </p>
      ))}
    </>
  );
}

export default Names;
