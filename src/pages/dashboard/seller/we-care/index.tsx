import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import TableWeCare from "@/components/dashboard/we-care/Table"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { Face } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import React from "react"

const WeCare = () => {
  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<Face />} title={"We Care"} />
        <Breadcrumb title={"We Care"} />
      </Box>
      <Box
        my={4}
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#4dbd09",
          }}
        >
          Request We Care
        </Button>
      </Box>
      <TableWeCare />
    </SidebarLayout>
  )
}

export default WeCare
