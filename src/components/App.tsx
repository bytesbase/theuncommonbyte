import React from "react";

import { ThemeProvider } from "../contexts/themeContext";

function App({ children }: React.PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default App;
