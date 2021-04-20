import React from "react";
import { Wrapper, Input, Slider } from "./styles";

const SwitchTheme = () => {
  const handleChange = (event) => {
    if (event.target.checked) {
      localStorage.setItem("isDarkTheme", "true");
    }
  };
  return (
    <Wrapper>
      <Input id="switch" onChange={handleChange} type="checkbox" />
      <Slider htmlFor="switch" />
    </Wrapper>
  );
};

export default SwitchTheme;
