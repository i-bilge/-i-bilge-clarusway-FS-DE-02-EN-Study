import React from "react";
import useFetch from "../hook/useFetch";

export const CustomHookComponent = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );

  if (error) {
    return <p>Something went bad!</p>;
  }

  return (
    <>
      <div>CustomHookComponent</div>
      {loading && <p>"Loading"</p>}
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};
