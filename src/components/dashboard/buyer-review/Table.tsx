import { Box, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import React, { useMemo } from "react"
import { rows } from "./rows"
import { convertNumberToIDR } from "@/utils/number"

const TableBuyerReview = () => {
  const columns = useMemo(() => {
    return [
      {
        flex: 0.1,
        field: "product",
        minWidth: 175,
        headerName: "Product",
        renderCell: (params: any) => {
          return (
            <Typography variant="body2" sx={{ color: "#3dd2c0" }}>
              {params.value}
            </Typography>
          )
        },
      },
      {
        flex: 0.1,
        field: "buyer_name",
        headerName: "Buyer Name",
        renderCell: (params: any) => {
          return <Typography variant="body2">{params.value}</Typography>
        },
      },
      {
        flex: 0.1,
        field: "your_rating",
        headerName: "Your Rating",
        renderCell: (params: any) => {
          return <Typography variant="body2">{params.value}</Typography>
        },
      },
      {
        flex: 0.15,
        type: "date",
        headerName: "Date",
        field: "date",
        valueGetter: (params: any) => new Date(params.value),
      },
      {
        flex: 0.15,
        headerName: "Note",
        field: "note",
        renderCell: (params: any) => {
          return (
            <Typography
              variant="body2"
              sx={{ color: "#3dd2c0", cursor: "pointer" }}
            >
              {params.value}
            </Typography>
          )
        },
      },
    ]
  }, [])

  return (
    <Box sx={{ marginTop: 4 }}>
      <DataGrid
        columns={columns}
        rowHeight={100}
        rows={rows}
        sx={{
          border: "none",
        }}
        hideFooterPagination
        disableRowSelectionOnClick
        disableColumnSelector
        disableColumnFilter
        disableDensitySelector
      />
    </Box>
  )
}

export default TableBuyerReview
