import React from 'react'
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { logOut } from "../auth/firebase";
// import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const navigate = useNavigate();
    // const currentUser = {
    //     displayName: "Ismail Bilge"
    // }
    const currentUser = false
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>React Movie App</h4>
          </Link>
          <div className="buttons text-white align-items-center">
            {currentUser ? (
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
            {currentUser ? (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                // onClick={() => logOut()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar