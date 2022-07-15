import React from "react";

export default function SortDropdown(props) {
  const { handleSort } = props;
  return (
    <select defaultValue="default" onChange={handleSort}>
      <option value="default" disabled>
        Sort By
      </option>
      <option value="dec">Decreasing by price</option>
      <option value="inc">Increasing by price</option>
    </select>
  );
}
