import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyMagazine, supplyMagazine } from "./magazineSlice";

export const MagazineView = () => {
  const [value, setValue] = useState(0)

  const numOfBooks = useSelector((state) => state.magazine.numOfMagazines);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Magazines - {numOfBooks}</h2>
      <button onClick={() => dispatch(buyMagazine(1))}>Buy Magazine</button>
      <br/>
      <input type="number" onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => dispatch(supplyMagazine(Number(value)))}>Restock Magazine</button>
    </div>
  );
};
