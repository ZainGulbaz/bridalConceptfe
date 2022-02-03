import React from "react";
import Notification from "./Notification";
import { Box, Typography } from "@mui/material";
import {
  NotificationsActiveOutlined,
  FileUploadOutlined,
  FileCopyOutlined,
  CheckroomOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
          border: 2,
          borderColor: "grey.900",
          py: 2,
          minWidth: "100%",
          mt: 1,
        }}
      >
        <Typography
          variant="h6"
          align="left"
          sx={{ fontWeight: "bold", ml: 1 }}
        >
          PENDING REQUESTS
        </Typography>

        <Notification
          icon={<NotificationsActiveOutlined />}
          details="Meeting with Stylist"
          time="9:40"
          date="Due soon"
        />

        <Notification
          icon={<FileUploadOutlined />}
          details="Upload Requested Document"
          time="10:40"
          date="Feb 2022"
        />

        <Notification
          icon={<FileCopyOutlined />}
          details="Invoice Due"
          time="12:40"
          date="Jan 2022"
        />

        <Typography
          variant="h6"
          align="left"
          sx={{ fontWeight: "bold", ml: 1 }}
        >
          RECENT ACTIVITY
        </Typography>
        <Notification
          icon={<CheckroomOutlined />}
          details="Approve Gown"
          time="12:40"
          date="Jan 2022"
        />
      </Box>
    </>
  );
};

export default Sidebar;
