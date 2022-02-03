import React from "react";
import { Box, Grid, Avatar, Stack, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box sx={{ width: "90vw", bgcolor: "#FFFAFA", mx: "auto" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-256.png"
              />
              <Avatar
                alt="Travis Howard"
                src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-256.png"
              />
            </Stack>
          </Grid>

          <Grid item>
            <Stack direction="row" sx={{ mt: 4 }}>
              <Typography variant="h6">AboutUs</Typography>

              <Typography variant="h6" sx={{ ml: 2 }}>
                ContactUs
              </Typography>
              <Typography variant="h6" sx={{ ml: 2 }}>
                Suggestions
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" sx={{ mt: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                Terms of Service
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: "medium", ml: 2 }}>
                Private Policy
              </Typography>
            </Stack>
          </Grid>

          <Grid item>
            <Stack direction="row" sx={{ mt: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                &copy; 2022 Bridal Concept
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <br />
    </>
  );
};
export default Footer;
