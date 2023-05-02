import { People } from "@mui/icons-material";
import { AppBar, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Shelf() {
  const theme = useTheme();

  return (
    <Paper
      square
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: theme.spacing(0.25),
      }}
    >
      <img src={require("./rolodex.jpg")} alt="logo" style={{ height: 50 }} />
    </Paper>
  );
}
