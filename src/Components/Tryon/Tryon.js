import React, { useEffect, useState } from "react";
import { Box, LinearProgress } from "@mui/material";

const Tryon = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 7000);
  }, []);

  function resizeIframe(obj) {
    obj.style.height =
      obj.contentWindow.document.documentElement.scrollHeight + "px";
  }

  return (
    <>
      {loader && (
        <Box sx={{ width: "98vw", ml: 1, mr: 1 }}>
          <LinearProgress />
        </Box>
      )}
      <Box sx={{ mt: 4, height: "100%", ml: 1, mr: 1 }}>
        <iframe
          src="https://square.site/appointments/buyer/widget/z4r15yv0bq08zh/LTRT9X4H2B73H"
          title="Schedule Appointment"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          onload={resizeIframe}
        ></iframe>
      </Box>
    </>
  );
};
export default Tryon;
