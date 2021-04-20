import React from "react";
import { Nav, Text } from "./styles";
import SwitchTheme from "../SwitchTheme";

const Navbar = () => {
  return (
    <Nav>
      <Text>To Do</Text>
      <SwitchTheme />
    </Nav>
  );
};

export default Navbar;
