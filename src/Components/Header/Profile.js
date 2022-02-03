import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux"
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import {updateData} from "../../Redux/Actions/userAction"
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {HOME} from "../../Routes/Routes"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Profile() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const client = useSelector((state) => state.clientData)
  const { userData } = client
  const[first_name,setFirstname]=React.useState("")
  const[last_name,setLastname]=React.useState("")
  const[client_email,setClientEmail]=React.useState("")
  const[client_password,setClientPassword]=React.useState("")
  const [open, setOpen] = React.useState(false);
  // ()=>{setOpen(true);updateUser();}
  const updateUser = () => {
    setOpen(true);
    dispatch(updateData({first_name,last_name,client_email,client_password},userData.client_email))

    };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    navigate(HOME)
  };

  return (
    <>

      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginTop: "2%" }}>
        Update Profile
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          marginLeft: '22%',
          marginTop: '3%'
        }}
      >
        <TextField fullWidth defaultValue={userData.first_name}  onChange={(e) => setFirstname(e.target.value)} label="First Name" id="fullWidth" /></Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          marginLeft: '22%',
          marginTop: '2%'
        }}
      >  <TextField fullWidth defaultValue={userData.last_name}  onChange={(e) => setLastname(e.target.value)} label="Last Name" id="fullWidth" />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          marginLeft: '22%',
          marginTop: '2%'
        }}
      >
        <TextField fullWidth defaultValue={userData.client_email}  onChange={(e) => setClientEmail(e.target.value)} label="Email" id="fullWidth" /></Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          marginLeft: '22%',
          marginTop: '2%'
        }}
      >  <TextField fullWidth defaultValue="Enter Password"  type="password" onChange={(e) => setClientPassword(e.target.value)} label="Password" id="fullWidth" /></Box>
       <Stack spacing={2}  sx={{
        width: 500,
        maxWidth: '100%',
        marginLeft: '22%',
        marginTop: '2%'

      }} ><Button variant="contained" onClick={updateUser} >
          Update
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your Profile has been updated!
        </Alert>
      </Snackbar></Stack>
    </>


  );
}