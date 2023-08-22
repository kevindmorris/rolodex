import React from "react";

import { useAppDispatch } from "./state/hooks";
import { getRandomUserAsync } from "./state/slices/userSlice";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Appframe from "./Appframe";
import theme from "./assets/theme";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getRandomUserAsync());
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Appframe />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
