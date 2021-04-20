import React from "react";
import { Wrapper, Input, Slider } from "./styles";

const SwitchTheme = () => {
  const handleChange = (event) => {
    console.log(event);
    if (event.target.checked) {
      localStorage.setItem("isDarkTheme", "true");
    }

    if (!event.target.checked) {
      localStorage.setItem("isDarkTheme", "false");
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
