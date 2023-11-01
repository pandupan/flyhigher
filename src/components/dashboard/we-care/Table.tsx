import { Box, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import React, { useMemo } from "react"
import { rows } from "./rows"
import { convertNumberToIDR } from "@/utils/number"
import { BsEye } from "react-icons/bs"

const TableWeCare = () => {
  const columns = useMemo(() => {
    return [
      {
        flex: 0.1,
        field: "id",
        minWidth: 175,
        headerName: "ID",
      },
      {
        flex: 0.1,
        field: "title",
        headerName: "Title",
      },
      {
        flex: 0.1,
        field: "status",
        headerName: "Status",
        renderCell: (params: any) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                backgroundColor: "#dc3444",
                padding: "5px 20px",
              }}
            >
              {params.value}
            </Box>
          )
        },
      },
      {
        flex: 0.15,
        field: "last_updated",
        headerName: "Last Updated",
        type: "date",
        valueGetter: (params: any) => new Date(params.value),
      },
      {
        flex: 0.15,
        headerName: "Actions",
        field: "action",
        renderCell: (params: any) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                backgroundColor: "#3dd2c0",
                padding: "5px 20px",
                cursor: "pointer",
                height: "40px",
              }}
            >
              <BsEye />
            </Box>
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
      />
    </Box>
  )
}

export default TableWeCare
