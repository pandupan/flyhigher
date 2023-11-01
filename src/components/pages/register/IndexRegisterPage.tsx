import AuthViewMobile from "@/components/sections/Auth/AuthViewMobile"
import RegisterViewDesktop from "@/components/sections/Auth/RegisterViewDesktop"
import { useMediaQuery, useTheme } from "@mui/material"

const IndexRegisterPage = () => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      {isMobileView && <AuthViewMobile />}
      {!isMobileView && <RegisterViewDesktop />}
    </>
  )
}

export default IndexRegisterPage
