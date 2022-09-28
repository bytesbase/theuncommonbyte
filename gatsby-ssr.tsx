import * as React from "react";
import { getCssText, darkTheme } from "./stitches.config";
import { COLOR_MODE_KEY } from "./src/constants";

function setColorsByTheme() {
  const colorModeKey = "🔑";
  const darkThemeClassName = "🌙";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = "light";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) colorMode = persistedPreference;
  else colorMode = prefersDarkFromMQ ? "dark" : "light";

  if (colorMode === "dark") {
    document.documentElement.classList.add(darkThemeClassName);
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("🔑", COLOR_MODE_KEY)
    .replace("🌙", darkTheme.className);

  let calledFunction = `(${boundFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

const FallbackStyles = () => {
  return (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />
  );
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles key="fallback-styles" />);
  setPreBodyComponents(<MagicScriptTag key="magic-script-tag" />);
};
