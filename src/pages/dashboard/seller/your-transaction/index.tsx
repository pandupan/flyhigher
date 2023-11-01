import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import TableTransaction from "@/components/dashboard/your-transaction/Table"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { ShoppingBag } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import React, { useState } from "react"

const filter = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Pending",
  },
  {
    id: 3,
    title: "Processing",
  },
  {
    id: 4,
    title: "On Hold",
  },
  {
    id: 5,
    title: "Completed",
  },
  {
    id: 6,
    title: "Refunded",
  },
]

const YourTransaction = () => {
  const [display, setDisplay] = useState("All")

  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<ShoppingBag />} title={"Your Transaction"} />
        <Breadcrumb title={"Order Status"} />
      </Box>
      <Box sx={{ display: "flex", gap: 1 }} marginTop={2}>
        {filter.map((item) => (
          <Typography
            key={item.id}
            sx={{
              borderRight: item.id !== filter.length ? "1px solid #fff" : "",
              paddingRight: "5px",
              cursor: "pointer",
              color: display === item.title ? "#fff" : "#3dd2c0",
            }}
            onClick={() => {
              if (item.title !== display) {
                setDisplay(item.title)
              }
            }}
          >
            {item.title}
          </Typography>
        ))}
      </Box>
      <TableTransaction />
    </SidebarLayout>
  )
}

export default YourTransaction
