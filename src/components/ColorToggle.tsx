import React from "react";
import { ThemeContext } from "../contexts/themeContext";
import { StyledButton } from "../style/componentLibrary";
import Icon from "./Icon";

export default function ColorToggle() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <StyledButton
      icon
      css={{
        borderRadius: "0.5rem",
        width: "26px",
        height: "26px",
      }}
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      {colorMode === "dark" && <Icon name="sun" fill="black" width={12} />}
      {colorMode === "light" && (
        <Icon name="moon" fill="white" width={12} height={12} />
      )}
    </StyledButton>
  );
}
