"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AnchorTemporaryDrawer from "./Sidebar";

export default function MenuAppBar() {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <AnchorTemporaryDrawer />
          <Typography
            variant="accentDisplay"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Lumie
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
