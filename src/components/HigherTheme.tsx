import * as React from "react"
import { Montserrat } from "next/font/google"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material"

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
})

export default function HigherTheme({
  children = null,
}: React.PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
