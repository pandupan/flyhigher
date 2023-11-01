"use client"

import Link from "next/link"
import { FlightTakeoff, Person, Store } from "@mui/icons-material"
import { Box, ButtonBase, Typography } from "@mui/material"
import { usePathname } from "next/navigation"

const ButtonRoutes = () => {
  const pathName = usePathname()

  return (
    <Box
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="/jastip" style={{ color: "white" }}>
        <ButtonBase
          sx={{
            backgroundColor: pathName.includes("jastip")
              ? "#0fd5c1"
              : "#090808",
            borderRadius: "8px",
            height: "32px",
            marginTop: "10px",
            fontSize: "16px",
            padding: "16px",
            border: pathName.includes("jastip")
              ? "3px solid #0fd5c1"
              : "3px solid #090808",
            "&:hover": {
              border: "3px solid #fff",
              transition: "all 0.3s ease",
            },
            transition: "transform 0.3s ease",
          }}
        >
          <FlightTakeoff
            sx={{
              width: "16px",
              marginRight: "6px",
              letterSpacing: "2px",
              textAlign: "center",
            }}
          />
          <Typography>Jastip</Typography>
        </ButtonBase>
      </Link>
      <Link href="/bisnis" style={{ color: "white" }}>
        <ButtonBase
          sx={{
            backgroundColor: pathName.includes("bisnis")
              ? "#0fd5c1"
              : "#090808",
            borderRadius: "8px",
            height: "32px",
            marginTop: "10px",
            fontSize: "16px",
            padding: "16px",
            border: pathName.includes("bisnis")
              ? "3px solid #0fd5c1"
              : "3px solid #090808",
            "&:hover": {
              border: "3px solid #fff",
              transition: "all 0.3s ease",
            },
            transition: "transform 0.3s ease",
          }}
        >
          <Store
            sx={{
              width: "16px",
              marginRight: "6px",
              letterSpacing: "2px",
              textAlign: "center",
            }}
          />
          <Typography>Retail</Typography>
        </ButtonBase>
      </Link>
      <Link href="/freelance" style={{ color: "white" }}>
        <ButtonBase
          sx={{
            backgroundColor: pathName.includes("freelance")
              ? "#0fd5c1"
              : "#090808",
            borderRadius: "8px",
            height: "32px",
            marginTop: "10px",
            fontSize: "16px",
            padding: "16px",
            border: pathName.includes("freelance")
              ? "3px solid #0fd5c1"
              : "3px solid #090808",
            "&:hover": {
              border: "3px solid #fff",
              transition: "all 0.3s ease",
            },
            transition: "transform 0.3s ease",
          }}
        >
          <Person
            sx={{
              width: "16px",
              marginRight: "6px",
              letterSpacing: "2px",
              textAlign: "center",
            }}
          />
          <Typography>Freelance</Typography>
        </ButtonBase>
      </Link>
    </Box>
  )
}

export default ButtonRoutes
