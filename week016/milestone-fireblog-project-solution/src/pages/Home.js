import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";

export const Home = () => {
  const user = useContext(AuthContext);
  return (
    <>
      <Typography variant="h4">
       Welcome {user.currentUser ? user.currentUser.email : "Guest"} !
      </Typography>
    </>
  );
};