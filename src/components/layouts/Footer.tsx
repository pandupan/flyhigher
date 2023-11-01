import React from "react"
import { Box, Container, Link, Typography } from "@mui/material"
import Image from "next/image"

export default function Footer() {
  const isLoggedIn = true

  return (
    <Box bgcolor="#000">
      <Link
        href={isLoggedIn ? "/session/buyyer/chat_admin" : "login"}
        sx={{
          transitionDuration: "0.1s",
          cursor: "pointer",
          "&:hover": {
            transform: "scale3d(1.1, 1.1, 1)",
          },
          right: { xs: 20, md: 96 },
          bottom: { xs: 20, md: 50 },
        }}
        position="fixed"
        zIndex={10}
      >
        <Image src="/icSupport.png" alt="Support" width={50} height={50} />
      </Link>

      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" paddingY={2} gap={2}>
          <Typography variant="body2">
            Copyright 2023 © Higher.id All rights reserved.
          </Typography>
          <Typography variant="body2">Developed with ❤️</Typography>
        </Box>
      </Container>
    </Box>
  )
}
