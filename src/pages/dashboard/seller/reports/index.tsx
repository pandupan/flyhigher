/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
import Breadcrumb from "@/components/dashboard/Breadcrumb"
import PageTitle from "@/components/dashboard/PageTitle"
import SidebarLayout from "@/components/layouts/SidebarLayout"
import { Report } from "@mui/icons-material"
import { Box, Button, TextField, Typography } from "@mui/material"
import StorageIcon from "@mui/icons-material/Storage"
import React, { forwardRef, useState } from "react"
import CardReports from "@/components/dashboard/reports/CardReports"
import Grid from "@mui/material/Unstable_Grid2"
import DatePicker from "react-datepicker"

// ** Third Party Imports
import format from "date-fns/format"
import addDays from "date-fns/addDays"

const dummyData = [
  {
    id: 1,
    title: "Gross Sales",
    subtitle: "250000",
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    iconBg: (
      <StorageIcon
        sx={{ fontSize: 100 }}
        style={{
          position: "absolute",
          right: "-20px",
          opacity: "0.5",
        }}
      />
    ),
    bg: "#3dd2c0",
  },
  {
    id: 2,
    title: "Withdraw",
    subtitle: "249990",
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    iconBg: (
      <StorageIcon
        sx={{ fontSize: 100 }}
        style={{
          position: "absolute",
          right: "-20px",
          opacity: "0.5",
        }}
      />
    ),
    bg: "#fa2f63",
  },
  {
    id: 3,
    title: "Sold",
    subtitle: "1 Items",
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    iconBg: (
      <StorageIcon
        sx={{ fontSize: 100 }}
        style={{
          position: "absolute",
          right: "-20px",
          opacity: "0.5",
        }}
      />
    ),
    bg: "#3dd2c0",
  },
  {
    id: 4,
    title: "Received",
    subtitle: "1 Orders",
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    iconBg: (
      <StorageIcon
        sx={{ fontSize: 100 }}
        style={{
          position: "absolute",
          right: "-20px",
          opacity: "0.5",
        }}
      />
    ),
    bg: "#3dd2c0",
  },
]

const Reports = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 15))
  const [startDateRange, setStartDateRange] = useState(new Date())
  const [endDateRange, setEndDateRange] = useState(addDays(new Date(), 45))

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const handleOnChangeRange = (dates: any) => {
    const [start, end] = dates
    setStartDateRange(start)
    setEndDateRange(end)
  }

  return (
    <SidebarLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PageTitle icon={<Report />} title={"Reports"} />
        <Breadcrumb title={"Reports"} />
      </Box>
      <Grid container spacing={4}>
        {dummyData.map((item) => (
          <Grid key={item.id} xs={12} md={3} mt={3}>
            <CardReports
              title={item.title}
              icon={item.icon}
              subtitle={item.subtitle}
              bg={item.bg}
              iconBg={item.iconBg}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
        my={5}
      >
        <Box
          sx={{
            width: "400px",
          }}
        >
          <DatePicker
            selectsRange
            endDate={endDate}
            selected={startDate}
            startDate={startDate}
            onChange={handleOnChange}
            shouldCloseOnSelect={false}
            // popperPlacement={popperPlacement}
            customInput={
              <TextField placeholder="Choose Date Filter" fullWidth />
            }
          />
        </Box>
        <Button variant="contained">Filter</Button>
      </Box>
    </SidebarLayout>
  )
}

export default Reports
