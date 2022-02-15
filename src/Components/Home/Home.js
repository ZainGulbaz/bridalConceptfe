import React from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import Tab from "./Tab";
import {useSelector} from "react-redux"
import {
  DetailsOutlined,
  InsertDriveFileOutlined,
  EmailOutlined,
  PhoneIphoneOutlined,
  CheckroomOutlined,
} from "@mui/icons-material";
import { useNavigate} from "react-router-dom";
import "../../Themes/CSS/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const client=useSelector((state)=>state.clientData)
  const {userData}=client
  
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", px: 1, minHeight: "90vh" }}
      >
        <Grid
          xs={10}
          item
          sx={{
            bgcolor: "#000000",
            height: "20%",
            color: "#ffffff",
            border: 2,
            borderColor: "#ffffff",
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{ height: "100%", p: 1 }}
          >
            <img
              src="https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png"
              alt="Profile Picture"
              className="profileImg"
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {userData?(<div>{userData.first_name}  {userData.last_name}</div>):(<div>Loading...</div>)}
              </Typography>
              <Typography variant="caption">Stylist</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item md={3} xs={6} sx={{ height: "20%" }}
        onClick={()=>navigate("/orderdetails")}>
          <Tab details="Order Details" icon={<DetailsOutlined />}/>
        </Grid>
        <Grid item xs={6} md={3} sx={{ height: "20%" }}>
          <Tab details="File Center" icon={<InsertDriveFileOutlined />} />
        </Grid>
        <Grid item xs={6} md={3} sx={{ height: "20%" }}>
          <Tab details="Message Center" icon={<EmailOutlined />} />
        </Grid>
        <Grid item xs={6} md={5} sx={{ height: "20%" }}>
          <Tab details="Virtual Appointment" icon={<PhoneIphoneOutlined />} />
        </Grid>
        <Grid
          item
          xs={6}
          md={5}
          sx={{ height: "20%" }}
          onClick={() => {
            navigate("/tryonappointment");
          }}
        >
          <Tab details="Try on Appointment" icon={<CheckroomOutlined />} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
