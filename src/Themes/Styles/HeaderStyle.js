import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";

export const Icon = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.up("xs")]: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
}));

export const useStyles = makeStyles({
  pointer: {
    cursor: "pointer",
  },
});
