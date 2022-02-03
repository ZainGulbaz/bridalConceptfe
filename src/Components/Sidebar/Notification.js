import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { useStyles } from "../../Themes/Styles/NotificationStyle";

const Notification = ({ details, date, time, icon }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          width: "90%",
          border: 2,
          borderColor: "gray.500",
          borderRadius: 1,
          mx: "auto",
          minHeight: 50,
          my: 2,
          px: 1,
          py: 1,
          overflow: "hidden",
        }}
        className={classes.notificationBox}
      >
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={3} md={2}>
            {icon}
          </Grid>
          <Grid item xs={9} md={10}>
            <Typography variant="h6"  sx={{ fontWeight: "bold" }}>
              {details}
            </Typography>
            <Stack direction="row" sx={{ mt: 1 }}>
              <Typography variant="caption">{time}</Typography>
              <Typography variant="caption" sx={{ ml: 1, fontWeight: "bold" }}>
                {date}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Notification;
