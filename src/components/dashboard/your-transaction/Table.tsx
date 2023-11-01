import { Box, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import React, { useState } from "react"
import { rows } from "./rows"

const columns = [
  {
    flex: 0.1,
    field: "id",
    minWidth: 80,
    headerName: "Buyer",
  },
  {
    flex: 0.25,
    minWidth: 200,
    field: "full_name",
    headerName: "Order Status",
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: "email",
    headerName: "Price",
    renderCell: (params: any) => (
      <Typography variant="body2" sx={{ color: "text.primary" }}>
        {params.row.email}
      </Typography>
    ),
  },
  {
    flex: 0.15,
    type: "date",
    minWidth: 130,
    headerName: "Date",
    field: "Date",
    valueGetter: (params: any) => new Date(params.value),
  },
  {
    flex: 0.1,
    field: "age",
    minWidth: 80,
    headerName: "Actions",
  },
]

const escapeRegExp = (value: any) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}

const TableTransaction = () => {
  const [searchText, setSearchText] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 7,
  })

  const handleSearch = (searchValue: any) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i")

    const filteredRows: any = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    } else {
      setFilteredData([])
    }
  }
  return (
    <Box sx={{ marginTop: 4 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        // slots={{ toolbar: Search }}
        sx={{
          border: "none",
        }}
        // slotProps={{
        //   baseButton: {
        //     size: "medium",
        //     variant: "outlined",
        //   },
        //   toolbar: {
        //     value: searchText,
        //     clearSearch: () => handleSearch(""),
        //     onChange: (event: any) => handleSearch(event.target.value),
        //   },
        // }}
      />
    </Box>
  )
}

export default TableTransaction
