import React from "react";

export default function Search(props) {
  const { handleSearch } = props;
  return <input type="text" onChange={(event) => handleSearch(event)} />;
}
