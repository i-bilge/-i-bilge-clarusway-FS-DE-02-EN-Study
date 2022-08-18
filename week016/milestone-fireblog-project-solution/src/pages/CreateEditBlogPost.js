import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const CreateEditBlogPost = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  return user.currentUser ? (
    <Typography>CreateEditComponent</Typography>
  ) : (
    <Typography mt={5}>
      In order to create a blog post you need to{" "}
      <Typography
        color="primary"
        variant="span"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/auth")}
      >
        Log In
      </Typography>
      .
    </Typography>
  );
};