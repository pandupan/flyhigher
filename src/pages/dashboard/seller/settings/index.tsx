import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { Settings } from "@mui/icons-material"
import { Box } from "@mui/material"
import React from "react"

const Setting = () => {
  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<Settings />} title={"Settings"} />
        <Breadcrumb title={"Settings"} />
      </Box>
    </SidebarLayout>
  )
}

export default Setting
