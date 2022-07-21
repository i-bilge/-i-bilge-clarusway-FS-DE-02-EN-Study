import React, { useEffect } from "react";

function UserCard(props) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("I am in UserCard.");
    }, 1000);

    //componentWillUnmount
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <img src={props.userInfo?.picture.large} alt="User avatar" />
      <p>{props.userInfo?.name.first}</p>
      <p>{props.userInfo?.dob.age}</p>
    </>
  );
}

export default UserCard;
