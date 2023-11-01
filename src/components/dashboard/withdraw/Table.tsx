import { Box, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import React, { useMemo } from "react"
import { rows } from "./rows"
import { convertNumberToIDR } from "@/utils/number"

const TableWithdraw = () => {
  const columns = useMemo(() => {
    return [
      {
        flex: 0.1,
        field: "order_id",
        minWidth: 175,
        headerName: "Order ID",
      },
      {
        flex: 0.1,
        field: "req_amount",
        headerName: "Req. Amount",
        renderCell: (params: any) => {
          return (
            <Typography variant="body2">
              {convertNumberToIDR(params.value)}
            </Typography>
          )
        },
      },
      {
        flex: 0.1,
        field: "charges",
        headerName: "Charges",
        renderCell: (params: any) => {
          return (
            <Typography variant="body2">
              {convertNumberToIDR(params.value)}
            </Typography>
          )
        },
      },
      {
        flex: 0.15,
        field: "received",
        headerName: "Received",
        renderCell: (params: any) => {
          return (
            <Typography variant="body2">
              {convertNumberToIDR(params.value)}
            </Typography>
          )
        },
      },
      {
        flex: 0.15,
        headerName: "Payment",
        field: "payment",
      },
      {
        flex: 0.15,
        headerName: "Mode",
        field: "mode",
        renderCell: (params: any) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#50bb25",
                padding: "4px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {params.row.mode}
              </Typography>
            </Box>
          )
        },
      },
      {
        flex: 0.15,
        headerName: "Note",
        field: "note",
      },
      {
        flex: 0.15,
        type: "date",
        headerName: "Date",
        field: "date",
        valueGetter: (params: any) => new Date(params.value),
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
      />
    </Box>
  )
}

export default TableWithdraw
