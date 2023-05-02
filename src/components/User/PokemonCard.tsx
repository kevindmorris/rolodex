import React from "react";
import { useAppSelector } from "../../state/hooks";
import { Avatar, Paper, Typography, alpha, useTheme } from "@mui/material";

export default function PokemonCard() {
  const theme = useTheme();

  const user = useAppSelector((state) => state.user.user);
  return (
    <Paper
      variant="outlined"
      sx={{
        p: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        bgcolor: alpha(theme.palette.primary.main, 0.25),
      }}
    >
      <Avatar sx={{ width: 125, height: 125 }}>
        <img src={user.picture.large} alt="profile" />
      </Avatar>
      <div
        style={{
          flex: 1,
          padding: theme.spacing(2),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" fontWeight="bold" noWrap>
          {user.name.first} {user.name.last}
        </Typography>
        <Typography variant="caption" noWrap>
          {user.email}
        </Typography>
        <Typography variant="caption" noWrap>
          {user.phone}
        </Typography>
        <Typography variant="caption" noWrap>
          {user.location.street.number} {user.location.street.name} St.
        </Typography>
        <Typography variant="caption" noWrap>
          {user.location.city}, {user.location.state} {user.location.postcode}
        </Typography>
        <Typography variant="caption" noWrap>
          {user.location.country}
        </Typography>
      </div>
    </Paper>
  );
}
