import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import TableListing from "@/components/dashboard/your-listing/Table"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { AddCircle, ShoppingBag } from "@mui/icons-material"
import { Box, ButtonBase, Typography } from "@mui/material"
import React, { useState } from "react"

const filter = [
  {
    id: 1,
    title: "All",
    value: 1,
  },
  {
    id: 2,
    title: "Published",
    value: 1,
  },
  {
    id: 3,
    title: "Draft",
    value: 0,
  },
  {
    id: 4,
    title: "Pending",
    value: 0,
  },
  {
    id: 5,
    title: "Archived",
    value: 0,
  },
]

const YourListing = () => {
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
        <PageTitle icon={<ShoppingBag />} title={"Listing"}>
          <ButtonBase
            sx={{
              backgroundColor: "#0fd5c1",
              borderRadius: "16px",
              height: "32px",
              fontSize: "16px",
              padding: "16px",
              border: "3px solid #0fd5c1",
              "&:hover": {
                border: "3px solid #fff",
                transition: "all 0.3s ease",
              },
            }}
          >
            <AddCircle
              sx={{
                width: "15px",
                marginRight: "6px",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                letterSpacing: "1px",
              }}
            >
              Post Your Service
            </Typography>
          </ButtonBase>
        </PageTitle>
        <Breadcrumb title={"Listing"} />
      </Box>
      <Box sx={{ display: "flex", gap: 1 }} marginTop={3}>
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
            {item.title} ({item.value})
          </Typography>
        ))}
      </Box>
      <TableListing />
    </SidebarLayout>
  )
}

export default YourListing
