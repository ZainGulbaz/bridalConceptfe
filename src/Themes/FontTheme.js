import { useTheme } from "@mui/material";

const FontTheme = () => {
  const fontTheme = useTheme();
  fontTheme.typography.h6 = {
    fontSize: "0.6rem",
    [fontTheme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  };
  fontTheme.typography.caption = {
    fontSize: "0.5rem",
    [fontTheme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  };
  fontTheme.typography.h5 = {
    fontSize: "0.8rem",
    [fontTheme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  };
  fontTheme.typography.h4 = {
    fontSize: "1.2rem",
    [fontTheme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  };

  return fontTheme;
};

export default FontTheme;
