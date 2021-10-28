import React from "react";

function Search({ searchHandler }) {
  return (
    <>
      <h2>Phonebook</h2>
      filter shown with: <input type="text" onChange={searchHandler} />
      <br />
    </>
  );
}

export default Search;
