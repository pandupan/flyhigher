import { Montserrat } from "next/font/google"
import { createTheme, ThemeOptions } from "@mui/material/styles"
import { outlinedInputClasses } from "@mui/material"

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2dd4bf",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#51bb25",
      contrastText: "#ffffff",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(189,188,188,0.6)",
      disabled: "rgba(119,118,118,0.38)",
    },
    background: {
      default: "#000000",
    },
    error: {
      main: "#d45959",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  shape: {
    borderRadius: 30,
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       ...(ownerState.color === "primary" && {
    //         backgroundColor: "rgb(45 212 191)",
    //         color: "#fff",
    //         textTransform: "none",
    //         "&:hover": {
    //           backgroundColor: "rgb(45 212 191)",
    //         },
    //       }),
    //       ...(ownerState.color === "secondary" && {
    //         backgroundColor: "rgb(244 63 94)",
    //         color: "#fff",
    //         textTransform: "none",
    //         "&:hover": {
    //           backgroundColor: "rgb(244 63 94)",
    //         },
    //       }),
    //     }),
    //   },
    // },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       "--TextField-brandBorderColor": "#E0E3E7",
    //       "--TextField-brandColor": "white",
    //       "--TextField-brandBorderHoverColor": "#B2BAC2",
    //       "--TextField-brandBorderFocusedColor": "white",
    //       "& label.Mui-focused": {
    //         color: "var(--TextField-brandBorderFocusedColor)",
    //       },
    //     },
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          // borderColor: "var(--TextField-brandBorderColor)",
        },
        root: {
          color: "#000000",
          // [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          //   borderColor: "var(--TextField-brandBorderHoverColor)",
          // },
          // [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          //   borderColor: "var(--TextField-brandBorderFocusedColor)",
          // },
        },
      },
    },
    // MuiFilledInput: {
    //   styleOverrides: {
    //     root: {
    //       "&:before, &:after": {
    //         borderBottom: "2px solid var(--TextField-brandBorderColor)",
    //       },
    //       "&:hover:not(.Mui-disabled, .Mui-error):before": {
    //         borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
    //       },
    //       "&.Mui-focused:after": {
    //         borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
    //       },
    //     },
    //   },
    // },
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       "&:before": {
    //         borderBottom: "2px solid var(--TextField-brandBorderColor)",
    //       },
    //       "&:hover:not(.Mui-disabled, .Mui-error):before": {
    //         borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
    //       },
    //       "&.Mui-focused:after": {
    //         borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
    //       },
    //     },
    //   },
    // },
  },
})

export default theme
