import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      primary: "quatro-slab, serif",
      secondary: "elza-text, sans-serif",
    },
    fontSizes: {
      xs: ".6rem",
      small: ".85rem",
      code: ".9rem",
      normal: "1rem",
      postText: "1.1rem",
      h2: "1.2rem",
      large: "1.5rem",
      xl: "2rem",
    },
    colors: {
      uncommonblue: "#246C95",
      uncommongreen: "#9ED8B5",
      primary: "#000",
      text: "#3f3f3f",
      muted: "#777777",
      dark: "#000",
      invertedPrimary: "white",
      link: "#246C95",
      background: "#fff",
    },
    space: {
      small: ".5rem",
      medium: "1rem",
      large: "1.5rem",
      xl: "2rem",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    dark: "(prefers-color-scheme: dark)",
  },
  utils: {
    m: (value: number | string) => ({
      margin: value,
    }),
    mt: (value: number | string) => ({
      marginTop: value,
    }),
    mr: (value: number | string) => ({
      marginRight: value,
    }),
    mb: (value: number | string) => ({
      marginBottom: value,
    }),
    ml: (value: number | string) => ({
      marginLeft: value,
    }),
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: number | string) => ({
      padding: value,
    }),
    pt: (value: number | string) => ({
      paddingTop: value,
    }),
    pr: (value: number | string) => ({
      paddingRight: value,
    }),
    pb: (value: number | string) => ({
      paddingBottom: value,
    }),
    pl: (value: number | string) => ({
      paddingLeft: value,
    }),
    px: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    bg: (value: string) => ({
      background: value,
    }),
    spaceX: (value: string) => ({
      "& > :nth-child(n+2)": {
        ml: value,
      },
    }),
    spaceY: (value: string) => ({
      "& > :nth-child(n+2)": {
        mt: value,
      },
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    primary: "#fff",
    muted: "#777777",
    dark: "#fff",
    text: "#f0f0f0",
    invertedPrimary: "#000",
    background: "#1D2125",
    link: "#96d0f1",
  },
});

const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "*": {
    margin: 0,
  },
  "html, body": {
    height: "100%",
    background: "$background",
    color: "$primary",
  },
  body: {
    fontFamily: "$secondary",
    lineHeight: "1.5",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  strong: { fontWeight: "bold" },
  em: { fontStyle: "italic" },
  h1: { fontSize: "$large" },
  h2: { fontSize: "$h2" },
  h4: { fontSize: "0.8rem" },
  a: {
    textDecoration: "inherit",
    color: "inherit",
  },
  "h1,h2,h3,h4,h5": {
    fontFamily: "$primary",
    fontWeight: "bolder",
  },
  ".cky-consent-container, .cky-modal": {
    fontFamily: "$primary",
    "p, span": {
      fontFamily: "$primary",
    },
    button: {
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bolder",
      fontSize: "$small",
    },
  },
  ".code-toolbar": {
    my: "2rem",
  },
});

globalStyles();
