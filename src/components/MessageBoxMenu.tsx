"use client"
import React, { useEffect, useState } from "react"
import { Box, IconButton, Link, Stack, Typography } from "@mui/material"
import Image from "next/image"
import { FiMessageSquare } from "react-icons/fi"
import { getMessage } from "@/api-services/headerService"
import { styled } from "@mui/material/styles"

const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    right: "-100px",
  },
  [theme.breakpoints.up("md")]: {
    right: "0",
  },
}))

export default function MessageBoxMenu() {
  const [showMessage, setShowMessage] = React.useState(false)
  const [data, setData] = useState<any>({})

  useEffect(() => {
    const fetch = async () => {
      const data = await getMessage()
      setData(data?.data.data)
    }
    fetch()
  }, [])

  return (
    <IconButton
      onMouseEnter={() => {
        if (data?.total > 0) {
          setShowMessage(true)
        }
      }}
      onMouseLeave={() => setShowMessage(false)}
      onClick={() => {
        if (data?.total > 0) {
          setShowMessage((prev) => !prev)
        }
      }}
      sx={{ borderRadius: "0", padding: "10px" }}
    >
      <FiMessageSquare style={{ color: "#fff", width: "20px" }} />

      {data.total > 0 && (
        <Typography
          variant="caption"
          color="#fff"
          fontWeight="bold"
          sx={{
            backgroundColor: "#03DAC6",
            borderRadius: "20px",
            padding: "3px 5px",
            position: "absolute",
            lineHeight: "1",
            top: "-2px",
            left: "22px",
          }}
        >
          {data.total}
        </Typography>
      )}

      <Wrapper
        border="1px solid #202020"
        sx={{
          color: "#fff",
          position: "absolute",
          top: "40px",
          display: showMessage ? "block" : "none",
          cursor: "auto",
          width: "340px",
          backgroundColor: "#000",
          padding: "16px",
          borderRadius: "4px",
        }}
      >
        <Typography variant="h6" textAlign="left">
          Message Box
        </Typography>

        <Box
          sx={{
            backgroundColor: "#000",
          }}
          display="flex"
          flexDirection="column"
          gap={3}
          marginTop={3}
        >
          <Link href="#" underline="none">
            <Stack direction="row" gap={1}>
              <Box position="relative">
                <Box
                  position="absolute"
                  top={0}
                  component="span"
                  width={12}
                  height={12}
                  bgcolor="#50BB24"
                  sx={{ borderRadius: "50%", border: "1px solid #fff" }}
                ></Box>

                <Image
                  src="/user.svg"
                  alt="Profile picture"
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Box width="100%">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  width="100%"
                >
                  <Typography variant="body2" fontWeight="bold" color="#fff">
                    Maftuh Ichsan
                  </Typography>
                  <Typography variant="body2" color="#50BB24">
                    2 weeks ago
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  textAlign="start"
                  color="#A4A4A4"
                >
                  Nani?
                </Typography>
              </Box>
            </Stack>
          </Link>

          <Link
            href="#"
            underline="none"
            color="#fff"
            sx={{
              fontSize: "14px",
              backgroundColor: "#03DAC6",
              padding: "12px",
              borderRadius: "4px",
              "&:hover": { backgroundColor: "#03c4b1" },
            }}
          >
            View all
          </Link>
        </Box>
      </Wrapper>
    </IconButton>
  )
}
