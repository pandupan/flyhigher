import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import TableNotification from "@/components/dashboard/notifications/Table"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { Notifications } from "@mui/icons-material"
import { Box } from "@mui/material"
import React from "react"

const Notification = () => {
  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<Notifications />} title={"Notification"} />
        <Breadcrumb title={"Notification"} />
      </Box>
      <Box my={4}>
        <TableNotification />
      </Box>
    </SidebarLayout>
  )
}

export default Notification
