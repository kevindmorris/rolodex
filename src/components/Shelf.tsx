import { Paper, useTheme } from "@mui/material";

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
      <img
        src={process.env.PUBLIC_URL + "/images/rolodex.jpg"}
        alt="logo"
        style={{ height: 50 }}
      />
    </Paper>
  );
}
