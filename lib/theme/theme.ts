import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    gochiH1: {
      fontFamily: "Gochi Hand",
      fontSize: "clamp(3rem, 10vw, 10rem)",
      fontWeight: 700,
    },
    gochiH2: {
      fontFamily: "Gochi Hand",
      fontWeight: 700,
      fontSize: "clamp(2rem, 5vw, 5rem)",
    },
    gochiSubHeader: {
      fontFamily: "Gochi Hand",
      fontWeight: 700,
      fontSize: "clamp(2rem, 5vw, 4rem)",
    },
    gochiNavbar: {
      fontSize: 35,
      fontFamily: "Gochi Hand",
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
    },

    body1: {
      fontFamily: "Rubik, sans-serif",
      fontSize: 18,
    },
    body2: {
      fontFamily: "Rubik, sans-serif",
      fontSize: 16,
    },
  },
  palette: {
    background: {
      default: "#FFFFFF",
      paper: "#f8f9fa", //backgroundColor: (theme) => theme.palette.background.paper
    },
    text: {
      primary: "#101826ff",
      secondary: "#475466ff", //color: 'text.secondary'
    },
    // primary: {
    //   main: "#0d0d3", //color:'primary.main'
    // },
    // secondary: {
    //   main: "#FFC0CB",
    // },
    // error: {
    //   main: "red",
    // },
    // warning:{
    //   main:'red'
    // }
  },
});
