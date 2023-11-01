import AuthViewMobile from "@/components/sections/Auth/AuthViewMobile"
import LoginViewDesktop from "@/components/sections/Auth/LoginViewDesktop"
import { useMediaQuery, useTheme } from "@mui/material"

const IndexLoginPage = () => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      {isMobileView && <AuthViewMobile />}
      {!isMobileView && <LoginViewDesktop />}
    </>
  )
}

export default IndexLoginPage
