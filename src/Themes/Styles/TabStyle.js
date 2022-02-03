import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  tab: {
    backgroundColor: "black",
    transition: "ease-out 0.2s",

    "&:hover": {
      transform: "scale(0.9)",
      transition: "ease-in 0.2s",
      cursor: "pointer",
    },
  },
});
