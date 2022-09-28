import React from "react";
import { darkTheme } from "../../stitches.config";
import { COLOR_MODE_KEY } from "../constants";

type ColorMode = "light" | "dark";
type ThemeContextValue = {
  colorMode: ColorMode;
  setColorMode: (newValue: ColorMode) => void;
};

const themes = {
  light: "light",
  dark: darkTheme.className,
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  colorMode: "light",
  setColorMode: () => {},
});

export const ThemeProvider: React.FC = ({
  children,
}: React.PropsWithChildren) => {
  const [colorMode, rawSetColorMode] = React.useState<ColorMode>("light");

  const setColorMode = React.useCallback(
    (newValue: ColorMode) => {
      document.documentElement.classList.remove(themes[colorMode]);
      document.documentElement.classList.add(themes[newValue]);

      localStorage.setItem(COLOR_MODE_KEY, newValue);
      rawSetColorMode(newValue);
    },
    [colorMode, rawSetColorMode]
  );

  React.useEffect(() => {
    const root = document.documentElement;
    const initialColorMode = root.classList.contains(themes["dark"])
      ? "dark"
      : "light";
    rawSetColorMode(initialColorMode);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        const colorScheme = e.matches ? "dark" : "light";
        setColorMode(colorScheme);
      });
  }, []);

  const contextValue: ThemeContextValue = {
    colorMode,
    setColorMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
