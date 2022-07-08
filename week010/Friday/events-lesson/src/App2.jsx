import React from "react";

export const App2 = () => {
  const handleName = (event) => {
    console.log("Name is", event.target.value);
  };
  const handleAge = (event) => {
    console.log("Age is", event.target.value);
  };

  return (
    <>
      <h2>Form</h2>
      <form>
        <label id="name">Name</label>
        <input
          onChange={(event) => handleName(event)}
          type="text"
          name="name"
        />
        <label id="age">Age</label>
        <input
          type="number"
          name="age"
          onChange={(event) => handleAge(event)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
