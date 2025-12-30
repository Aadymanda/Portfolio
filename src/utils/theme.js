// src/utils/theme.js
export const colors = {
  bg: "#020218",
  primary: "#7000FF",
  secondary: "#3399FF",
  white: "#FFFFFF",
  black: "#000000",
  textBody: "#C0C0FF",
  glassBg: "rgba(10, 10, 40, 0.5)",
  glassBorder: "rgba(112, 0, 255, 0.3)",
};

export const comicTitleStyle = {
  fontFamily: "'Bangers', cursive",
  letterSpacing: "2px",
  color: colors.white,
  textShadow: `
    -1px -1px 0 ${colors.black},
    1px -1px 0 ${colors.black},
    -1px 1px 0 ${colors.black},
    1px 1px 0 ${colors.black},
    4px 4px 0 ${colors.primary}
  `,
};

export const commonStyles = {
  section: {
    minHeight: "100vh",
    padding: "4rem 10vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: colors.textBody,
  }
};