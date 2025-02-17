import React, { useState } from "react";
import { Box, Tabs, Tab, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ChatIcon from "@mui/icons-material/Chat";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function NavTab() {
  const [value, setValue] = useState(0);
  const isTabletOrPhone = useMediaQuery("(max-width: 900px)");

  if (!isTabletOrPhone) return null; // Cacher sur les grands écrans

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
        padding: "5px 0",
      }}
    >
      <Tabs
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          icon={<HomeIcon sx={{ fontSize: 28 }} />}
          label="Home"
          sx={{ fontWeight: "bold", fontSize: "14px", color: "black" }}
        />
        <Tab
          icon={<EventNoteIcon sx={{ fontSize: 28 }} />}
          label="Rendez-vous"
          sx={{ fontWeight: "bold", fontSize: "14px", color: "black" }}
        />
        <Tab
          icon={<ChatIcon sx={{ fontSize: 28 }} />}
          label="Message"
          sx={{ fontWeight: "bold", fontSize: "14px", color: "black" }}
        />
        <Tab
          icon={<PersonOutlineIcon sx={{ fontSize: 28 }} />}
          label="Profile"
          sx={{ fontWeight: "bold", fontSize: "14px", color: "black" }}
        />
      </Tabs>
    </Box>
  );
}
