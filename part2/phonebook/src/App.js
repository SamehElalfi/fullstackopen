import React, { useState } from "react";
import Names from "./components/Names";
import AddNew from "./components/AddNew";
import Search from "./components/Search";

function App() {
  const [names, setNames] = useState([
    { name: "Sameh Ashraf", phone: "0123456789" },
  ]);

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

  return (
    <div className="App">
      <Search searchHandler={searchHandler} />
      <AddNew submitHandler={submitHandler} />
      <Names names={search === "" ? names : filteredPersons} />
    </div>
  );
}

export default App;
