import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Link,useNavigate} from 'react-router-dom';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";
import {useDispatch,useSelector} from "react-redux"
import {clientData,emailAction} from "../../Redux/Actions/userAction";
import {LOGIN} from "../../Routes/Routes";


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DropDown() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const client=useSelector((state)=>state.clientData)
 const {userData}=client
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

React.useEffect(()=>{
  const emailData=localStorage.getItem("email")
  dispatch(clientData(emailData))
},[dispatch])

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  theme.typography.h6 = {
    fontSize: "0.7rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          variant="text"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bolder", color: "#000000" }}
          >
            {userData?(<div>{userData.first_name}  {userData.last_name}</div>):(<div>Loading...</div>)}
            
          </Typography>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        ><Link to="/profile">
          <MenuItem
            onClick={handleClose}
            disableRipple
            sx={{ color: "#000000" }}
          >
            <EditIcon />
             Update
          </MenuItem></Link>
          <MenuItem
            onClick={handleClose}
            disableRipple
            sx={{ color: "#000000" }}
            onClick={()=>
              {
                navigate(LOGIN);
                // dispatch(emailAction("test@gmail.com"));
                localStorage.setItem("email","test@gmail.com");

              }}
          >
            <LogoutIcon />
            Logout
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
         
        </StyledMenu>
      </ThemeProvider>
    </>
  );
}
