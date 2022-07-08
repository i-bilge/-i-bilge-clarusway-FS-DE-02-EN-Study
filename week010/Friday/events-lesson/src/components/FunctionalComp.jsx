import React from "react";
import Child from "./Child";

export default function FunctionalComp() {
  const leftClick = () => console.log("You clicked left1111111111");
  const rightClick = () => console.log("You clicked right");

  const leftClick2 = function (name, event) {
    console.log("event", event);
    console.log(`You clicked left ${name}`);
  };

  return (
    <>
      <div>FunctionalComp</div>
      <button onClick={(e) => leftClick2("John", e)} onContextMenu={rightClick}>
        Click Me
      </button>
      <button
        onClick={(e) => {
          leftClick();
          leftClick2("John", e);
        
        }}
        onContextMenu={rightClick}
      >
        Click Me
      </button>
      <Child handleClick={leftClick}/>
    </>
  );
}
