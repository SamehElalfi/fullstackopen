import React, { useState } from "react";

function AddNew({ submitHandler }) {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  return (
    <div>
      <h2>Add a new</h2>
      <form onSubmit={(e) => submitHandler(e, newName, newPhone)}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)} />
          <br />
          debug: {newName}
        </div>
        <div>
          phone: <input onChange={(e) => setNewPhone(e.target.value)} />
          <br />
          debug: {newPhone}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
