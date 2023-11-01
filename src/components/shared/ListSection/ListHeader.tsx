import { useMediaQuery, useTheme } from "@mui/material"
import PostServiceButton from "@/components/buttons/PostServiceButton"
import HomepageFilter from "@/components/dropdown/HomepageFilter"
import { Box, Grid } from "@mui/material"
import React from "react"
import { IListHeader } from "./interface"

const ListHeader = ({
  children,
  withHomepageFilter = false,
  rating,
  handleSetRating,
}: IListHeader) => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Grid container justifyContent="space-between" xs={12}>
      <Grid item xs={6}>
        <Box
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            boxSizing: "border-box",
          }}
          justifyContent={{
            lg: "flex-start",
            md: "flex-start",
            xs: "space-between",
          }}
        >
          {children}
          {!isMobileView && <PostServiceButton />}
        </Box>
      </Grid>

      {withHomepageFilter && (
        <Grid item container xs={6} justifyContent="flex-end">
          <Grid item>
            <HomepageFilter value={rating} handleChange={handleSetRating} />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default ListHeader
