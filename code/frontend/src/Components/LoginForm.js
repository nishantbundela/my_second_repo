import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Button, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import KeyIcon from "@mui/icons-material/Key";
/*
LoginForm component that is part of the larger LandingPage component
*/

export default function LoginForm() {
  /*
    SSO login will probably have to be handled with asynchonous functions here.

    TODO: 
    1. Add SSO login, add handlers to persist user inputs as state variable
    2. Allow user to toggle ability to see password 
    */

  // these are for the css elements that hold the login paper
  const paperStyle = {
    padding: 30,
    width: "42vh",
    height: "45vh",
  };
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const avatarStyle = { backgroundColor: "#9EDDF2" };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          rowSpacing={2}
        >
          <Grid item align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login to JayPay</h2>

            <TextField
              style={{ width: "26ch" }}
              id="outlined-basic"
              label="User ID"
              variant="outlined"
            />

            <FormControl sx={{ m: 1, width: "26ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/admin";
              }}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<KeyIcon />}
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://jaypay-lego-api.herokuapp.com/jhu/login";
              }}
            >
              Sign In with SSO
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
