import React from "react";
import { useAppSelector } from "./state/hooks";
import Shelf from "./components/Shelf";
import User from "./components/User";
import Shoebox from "./components/Shoebox";
import { Divider } from "@mui/material";

export default function Appframe() {
  return (
    <>
      <Shelf />
      <User />
      <Shoebox />
    </>
  );
}
