import React, { useState } from "react";

export const Greeting = () => {
  const [changeText, setChangeText] = useState(true);

  return (
    <>
      <h1 data-testid="title">Hello world</h1>
      {changeText ? (
        <p data-testid="paragraph">Welcome to the page!</p>
      ) : (
        <p data-testid="paragraph">See you later!</p>
      )}

      <button onClick={() => setChangeText((prev) => !prev)}>
        Change Text
      </button>
    </>
  );
};
