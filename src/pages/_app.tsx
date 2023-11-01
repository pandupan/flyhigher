import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material"
import theme, { montserrat } from "@/theme"
import { QueryClient, QueryClientProvider } from "react-query"
import { SessionProvider } from "next-auth/react"
import "react-datepicker/dist/react-datepicker.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <main className={montserrat.className}>
            <Component {...pageProps} />
          </main>
        </SessionProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
