import React, { useState, useEffect } from "react";
import axios from "axios";

import Names from "./components/Names";
import AddNew from "./components/AddNew";
import Search from "./components/Search";

function App() {
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  const submitHandler = (e, newName, newPhone) => {
    e.preventDefault();

    const equalNames = names.filter((person) => {
      if (person.name === newName) {
        return true;
      }
      return false;
    });

    if (equalNames.length) alert(`${newName} is already added to phonebook`);
    else setNames(names.concat({ name: newName, phone: newPhone }));
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);

    const foundPersons = names.filter((person) => {
      if (person.name.toLowerCase().indexOf(e.target.value) !== -1) {
        return true;
      }
      return false;
    });

    setFilteredPersons(foundPersons);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setNames(response.data));
  }, []);

  return (
    <div className="App">
      <Search searchHandler={searchHandler} />
      <AddNew submitHandler={submitHandler} />
      <Names names={search === "" ? names : filteredPersons} />
    </div>
  );
}

export default App;
