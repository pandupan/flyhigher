import { Home } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

interface BreadcrumbProps {
  title: string
}

const Breadcrumb = ({ title }: BreadcrumbProps) => {
  const router = useRouter()
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Link href={"/"} style={{ textDecoration: "none" }}>
        <Home sx={{ color: "white" }} />
      </Link>
      /
      <Link
        href={`/dashboard/${router.pathname.split("/")[2]}`}
        style={{ textDecoration: "none" }}
      >
        <Typography sx={{ color: "white" }}>Member</Typography>
      </Link>
      /<Typography sx={{ color: "white" }}>{title}</Typography>
    </Box>
  )
}

export default Breadcrumb
