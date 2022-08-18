import { useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Stack,
  Button,
  IconButton,
  Typography,
} from "@mui/material";

//Icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../helper/firebase";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (value, inputType) => {
    setUserInfo({ ...userInfo, [inputType]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isSignUp
        ? await createUserWithEmailAndPassword(
            auth,
            userInfo.email,
            userInfo.password,
            userInfo.displayName
          )
        : await signInWithEmailAndPassword(
            auth,
            userInfo.email,
            userInfo.password
          );
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={{ width: "25%", margin: "40px auto 0" }} spacing={3}>
        {isSignUp && (
          <TextField
            label="Name"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={(event) =>
              handleChange(event.target.value, "displayName")
            }
          />
        )}
        <TextField
          label="Email"
          required
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          onChange={(event) => handleChange(event.target.value, "email")}
        />
        <TextField
          label="Password"
          required
          type={showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          onChange={(event) => handleChange(event.target.value, "password")}
        />
        <Button type="submit" variant="contained">
          {isSignUp ? "Sign Up" : "Log In"}
        </Button>
        <Typography>
          Do{isSignUp ? "" : "n't"} you have an account ? You can{" "}
          <Typography
            variant="span"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {!isSignUp ? "Sign Up" : "Log In"}
          </Typography>
          .
        </Typography>
      </Stack>
    </form>
  );
};