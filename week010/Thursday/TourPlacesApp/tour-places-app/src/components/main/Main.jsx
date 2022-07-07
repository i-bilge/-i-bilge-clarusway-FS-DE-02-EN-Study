import { data } from "../../helper/data.js";
import Card from "./Card.jsx";
import "./Main.scss";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card city={item} />
      ))}
    </div>
  );
};

export default Main;
