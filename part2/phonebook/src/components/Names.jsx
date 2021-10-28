import React from "react";

function Names({ names }) {
  if (names.length === 0) return "Loading Names";
  
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
