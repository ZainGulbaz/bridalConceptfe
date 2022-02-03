import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "../../Themes/Styles/TabStyle";
const Tab = ({ icon, details }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          color: "#ffffff",
          height: "100%",
          border: 2,
          borderColor: "#ffffff",
          borderRadius: 1,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "Center",
          alignItems: "center",
        }}
        className={classes.tab}
      >
        {icon}
        <Typography variant="h6" align="center">
          {details}
        </Typography>
      </Box>
    </>
  );
};

export default Tab;
