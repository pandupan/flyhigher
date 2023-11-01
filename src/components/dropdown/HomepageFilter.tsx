import { FormControl, MenuItem, Box, Select } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"

const HomepageFilter = ({
  value,
  handleChange,
}: {
  value?: string
  handleChange?: (e: any) => void
}) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          style={{
            backgroundColor: "#090808",
            borderRadius: "8px",
            height: "32px",
            marginTop: "10px",
            fontSize: "16px",
            color: "white",
          }}
          IconComponent={KeyboardArrowDown}
        >
          <MenuItem value="" disabled>
            Filter
          </MenuItem>
          <MenuItem value="best">Rating Terbaik</MenuItem>
          <MenuItem value="new">Paling Terbaru</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default HomepageFilter
