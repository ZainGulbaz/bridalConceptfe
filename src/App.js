import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Grid, ThemeProvider } from "@mui/material";
import { useMediaQuery, useTheme } from "@material-ui/core";
import FontTheme from "./Themes/FontTheme";
import Tryon from "./Components/Tryon/Tryon";
import Login from "./Components/Login/Login";
import FirstLogin from "./Components/Login/FirstLogin";
import { Route, Routes, useLocation } from "react-router-dom";
import { HOME, TRYON, LOGIN, FIRSTLOGIN,PROFILE,ORDERDETAILS} from "./Routes/Routes";
import InvoiceDetails from "./Components/Invoice Details/InvoiceDetails";
import Profile from "./Components/Header/Profile";
import "./App.css";

const App = () => {
  const theme = useTheme();
  let location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const fontTheme = FontTheme();

  return (
    <>
      <ThemeProvider theme={fontTheme}>
        {location.pathname !== LOGIN && location.pathname !== FIRSTLOGIN && (
          <Header />
        )}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Routes>
              <Route exact path={TRYON} element={<Tryon />} />
              <Route exact path={HOME} element={<Home />} />
              <Route exact path={ORDERDETAILS} element={<InvoiceDetails/>} />
              <Route exact path={PROFILE} element={<Profile />} />
            </Routes>
          </Grid>
          <Routes>
            <Route exact path={LOGIN} element={<Login />} />
            <Route exact path={FIRSTLOGIN} element={<FirstLogin />} />
            
          </Routes>
          <Grid item xs={0} sm={3}>
            {location.pathname !== LOGIN &&
              location.pathname != FIRSTLOGIN &&
              !isMobile && <Sidebar />}
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
