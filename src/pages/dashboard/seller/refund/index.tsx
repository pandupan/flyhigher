import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { Loop } from "@mui/icons-material"
import { Box } from "@mui/material"
import React from "react"

const Refund = () => {
  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<Loop />} title={"Refund"} />
        <Breadcrumb title={"Refund"} />
      </Box>
    </SidebarLayout>
  )
}

export default Refund
