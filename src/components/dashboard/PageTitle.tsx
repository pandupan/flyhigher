import { Box, Typography } from "@mui/material"
import React, { ReactNode } from "react"

interface PageTitleProps {
  icon: any
  title: string
  children?: ReactNode
}

const PageTitle = ({ icon, title, children }: PageTitleProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        gap: 2,
        alignItems: "center",
      }}
    >
      {icon}
      <Typography>{title}</Typography>
      {children}
    </Box>
  )
}

export default PageTitle
