import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

function App() {
  const [user, setUser] = useState();

  const [show, setShow] = useState(true);
  const [color, setColor] = useState("green");

  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <h4 style={{ color }}>Lifecycle</h4>
      {show && <UserCard userInfo={user} />}
      <button onClick={fetchUser}>Load User</button>
      <button onClick={() => setShow((prevVal) => !prevVal)}>
        {show ? "Hide" : "Show"}
      </button>
      <button onClick={() => setShow((prevVal) => !prevVal)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
