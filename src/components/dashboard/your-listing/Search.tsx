// ** MUI Imports
import { SearchRounded } from "@mui/icons-material"
import { TextField } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"

const Search = (props: any) => {
  return (
    <Box
      sx={{
        gap: 2,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        p: (theme) => theme.spacing(2, 5, 4, 5),
      }}
    >
      <TextField
        value={props.value}
        placeholder="Search…"
        onChange={props.onChange}
        InputProps={{
          startAdornment: (
            <Box sx={{ mr: 2, display: "flex" }}>
              <SearchRounded />
            </Box>
          ),
          endAdornment: (
            <IconButton
              size="small"
              title="Clear"
              aria-label="Clear"
              onClick={props.clearSearch}
            >
              <SearchRounded />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          color: "white",
          "& .MuiInputBase-root > svg": {
            mr: 2,
          },
        }}
      />
    </Box>
  )
}

export default Search
