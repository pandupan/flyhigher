import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import TableWithdraw from "@/components/dashboard/withdraw/Table"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import InputHigher from "@/components/react-hook-form/input"
import { convertNumberToIDR } from "@/utils/number"
import { Download } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/material"
import React from "react"

const Withdraw = () => {
  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<Download />} title={"Withdraw"} />
        <Breadcrumb title={"Withdraw"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
        marginTop={3}
        marginBottom={6}
      >
        <Typography
          sx={{
            fontSize: 14,
          }}
        >
          Transaction for: March 1, 2021 - March 31, 2021
        </Typography>
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          Total Balance {convertNumberToIDR("0")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignitems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>Filter</Typography>
          <Button variant="contained">Filter</Button>
        </Box>
        <Button variant="contained">Withdraw Now</Button>
      </Box>
      <Box>
        <TableWithdraw />
      </Box>
    </SidebarLayout>
  )
}

export default Withdraw
