"use client"
import FormLoginMobile from "@/components/tabs/FormLoginMobile"
import FormRegisterMobile from "@/components/tabs/FormRegisterMobile"
import TabPanel from "@/components/tabs/TabPanel"
import { Box, Tab, Tabs, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AuthProvidersMobile from "./AuthProvidersMobile"

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const AuthViewMobile = () => {
  const router = useRouter()
  const [value, setValue] = useState(router.pathname === "/login" ? 0 : 1)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (value === 0) router.push("/login")
    else if (value === 1) router.push("/register")
  }, [value])

  return (
    <Box
      maxWidth={600}
      height="100vh"
      mx="auto"
      bgcolor="red"
      sx={{
        backgroundImage: "url(/img/slider/4.png)",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Box textAlign="center">
        <Image src="/img/logo.png" width={100} height={100} alt="logo" />
        <h3 style={{ fontSize: "26px", marginTop: "2px" }}>Higher</h3>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Sign In" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel index={0} value={value}>
          <FormLoginMobile />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <FormRegisterMobile />
        </TabPanel>
      </Box>
      <Box textAlign="center">
        <Link href="#" style={{ textDecoration: "none" }}>
          <Typography color="white">Forgot Password?</Typography>
        </Link>
        <AuthProvidersMobile />
      </Box>
    </Box>
  )
}

export default AuthViewMobile
