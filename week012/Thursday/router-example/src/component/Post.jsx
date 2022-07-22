import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function Post() {
  const params = useParams();

  const navigate = useNavigate();

  return (
    <>
      <div>{`This is the Post ${params.postId}`}</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/login", { state: { admin: false } })}>
        Go Login Page
      </button>
    </>
  );
}

export default Post;
