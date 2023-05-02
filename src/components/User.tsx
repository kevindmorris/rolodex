import React from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import PokemonCard from "./User/PokemonCard";
import { getRandomUserAsync } from "../state/slices/userSlice";

export default function User() {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.user.status);
  const user = useAppSelector((state) => state.user.user);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Button
        variant="contained"
        onClick={() => dispatch(getRandomUserAsync())}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        Spin Rolodex
      </Button>
      <Backdrop open={status.user === "pending"} sx={{ position: "absolute" }}>
        <CircularProgress />
      </Backdrop>
      {user && status.user !== "pending" ? <PokemonCard /> : null}
    </div>
  );
}
