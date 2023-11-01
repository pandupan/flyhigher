import { convertNumberToIDR } from "@/utils/number"
import { Box, Typography } from "@mui/material"
import React from "react"

const CardReports = ({ icon, title, subtitle, bg, iconBg }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        background: bg,
        borderRadius: 1,
        minHeight: "140px",
        px: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {iconBg}
      {icon}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography>{title}</Typography>
        <Typography>
          {Number(subtitle) ? convertNumberToIDR(subtitle) : subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardReports
