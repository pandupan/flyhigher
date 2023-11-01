import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { Chat } from "@mui/icons-material"
import { Box } from "@mui/material"
import React from "react"

const ChatMember = () => {
  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<Chat />} title={"Chat Message"} />
        <Breadcrumb title={"Chat Message"} />
      </Box>
    </SidebarLayout>
  )
}

export default ChatMember
