import React, { useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import  {emailAction} from "../../Redux/Actions/userAction";
import { LinearProgress } from "@mui/material";
import {HOME,FIRSTLOGIN} from  "../../Routes/Routes"
import Axios from "axios";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Bridal Concept
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  let navigate = useNavigate();
  let dispatch=useDispatch();

  const handleSubmit = (event) => {
    setShowLoader(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //Getting Data from backend after form submission
    let email = data.get("email");
    let password = data.get("password");
    Axios.post("https://bridalconcept.herokuapp.com/getLoginData", { email, password })
      .then((res) => {
        
        if (!res.data?.isPass) {
          setTimeout(() => {
            setShowLoader(false);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 5000);
          }, 3000);
        }
        if (res.data?.isPass && res.data?.isFirstLogin) {
          navigate(FIRSTLOGIN);
        } else if (res.data?.isPass && !res.data?.isFirstLogin) {
          navigate(HOME);
        }
       })
      .catch((err) => console.log(err));
     localStorage.setItem("email",email)
      dispatch(emailAction(email));
      
      
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {showAlert && (
        <Alert severity="error" sx={{ width: "100vw", ml: 2 }} variant="filled">
          Your <strong>Password</strong> or <strong>Username</strong> is
          incorrect
        </Alert>
      )}
      <Box sx={{ width: "100vw", ml: 2 }}>
        {showLoader && <LinearProgress />}
      </Box>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.squarespace-cdn.com/content/v1/5e8cd8d186bfdb274a5ede25/1613274265348-IG5MUK33XHDG6E4N8HVC/Facetune_13-12-2020-11-29-46.jpg?format=1500w)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              BRIDAL CONCEPT
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.primary" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
