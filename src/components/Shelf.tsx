import { People } from "@mui/icons-material";
import { AppBar, Paper } from "@mui/material";
import React from "react";

export default function Shelf() {
  return (
    <Paper
      square
      variant="outlined"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <img src="/rolodex-logo.png" alt="rolodex" style={{ height: 55 }} />
    </Paper>
  );
}
