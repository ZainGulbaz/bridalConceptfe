import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import { Icon, useStyles } from "../../Themes/Styles/HeaderStyle";
import DropDown from "./Dropdown";
import Sidebar from "../Sidebar/Sidebar";
import {HOME} from "../../Routes/Routes";
import { useNavigate } from "react-router";
import {
  NotificationsNoneOutlined,
  CalendarTodayOutlined,
  MessageOutlined,
} from "@mui/icons-material";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#191919", height: 90 }}>
        <Toolbar
          sx={{ height: 90, display: "flex", justifyContent: "space-between" }}
        >
          <Stack
            sx={{ ml: 1, mt: 1 }}
            onClick={() => {
              navigate(HOME);
            }}
            className={classes.pointer}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              BRIDAL CONCEPT
            </Typography>
            <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
              HAUTE COUTURE
            </Typography>
          </Stack>
          {isMobile ? (
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Stack direction="row" sx={{ width: "100vw", py: 2 }}>
                  <Icon
                    sx={{ border: 1, bordercolor: "#000000", ml: 2 }}
                    onClick={handleClose}
                  >
                    <NotificationsNoneOutlined fontSize="small" />
                  </Icon>

                  <Icon
                    sx={{ border: 1, bordercolor: "#000000", ml: 2 }}
                    onClick={handleClose}
                  >
                    <MessageOutlined fontSize="small" />
                  </Icon>

                  <Icon
                    sx={{ border: 1, bordercolor: "#000000", ml: 2 }}
                    onClick={handleClose}
                  >
                    <CalendarTodayOutlined fontSize="small" />
                  </Icon>

                  <Icon
                    sx={{
                      border: 1,
                      bordercolor: "#000000",
                      borderRadius: 2,
                      ml: 2,
                    }}
                  >
                    <DropDown />
                  </Icon>
                </Stack>

                <Icon onClick={handleClose}>
                  <Sidebar />
                </Icon>
              </Menu>
            </Box>
          ) : (
            <Stack direction="row">
              <Icon
                sx={{
                  border: 1,
                  bordercolor: "#000000",
                  mr: 2,
                  borderRadius: 2,
                  my: "auto",
                }}
                className={classes.pointer}
              >
                <NotificationsNoneOutlined fontSize="large" />
              </Icon>
              <Icon
                sx={{
                  border: 1,
                  bordercolor: "#000000",
                  mr: 2,
                  borderRadius: 2,
                  my: "auto",
                }}
                className={classes.pointer}
              >
                <MessageOutlined fontSize="large" />
              </Icon>
              <Icon
                sx={{
                  border: 1,
                  bordercolor: "#000000",
                  mr: 2,
                  borderRadius: 2,
                  my: "auto",
                }}
                className={classes.pointer}
              >
                <CalendarTodayOutlined fontSize="large" />
              </Icon>
              <Icon
                sx={{
                  border: 1,
                  bordercolor: "#000000",
                  mr: 2,
                  borderRadius: 2,
                  my: "auto",
                }}
              >
                <DropDown />
              </Icon>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
