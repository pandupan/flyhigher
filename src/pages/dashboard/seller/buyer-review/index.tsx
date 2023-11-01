import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import TableBuyerReview from "@/components/dashboard/buyer-review/Table"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { Preview } from "@mui/icons-material"
import { Box } from "@mui/material"
import React from "react"

const BuyerReview = () => {
  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<Preview />} title={"Buyer's Review"} />
        <Breadcrumb title={"Buyer Review"} />
      </Box>
      <TableBuyerReview />
    </SidebarLayout>
  )
}

export default BuyerReview
