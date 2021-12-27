import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Button } from "./Button/styled";

const THEME = {
  fg: "palevioletred",
  bg: "white",
};

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

const Theming = () => {
  const [theme, setTheme] = useState(THEME);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => setTheme(invertTheme)}>Invert Theme</Button>
    </ThemeProvider>
  );
};

export default Theming;
