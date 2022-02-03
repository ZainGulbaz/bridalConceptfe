import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  notificationBox: {
    backgroundColor: "white",
    "&:hover": {
      borderColor: "gray",
      cursor: "pointer",
    },
  },
});
