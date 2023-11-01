"use client"
import React, { useEffect, useState } from "react"
import { Box, IconButton, Link, Stack, Typography } from "@mui/material"
import { FiBell } from "react-icons/fi"
import { getNotification } from "@/api-services/headerService"
import { styled } from "@mui/material/styles"

const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    right: "-100px",
  },
  [theme.breakpoints.up("md")]: {
    right: "0",
  },
}))

export default function NotificationMenu() {
  const [showNotification, setShowNotification] = React.useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getNotification()
      setData(data?.data.data)
    }
    fetch()
  }, [])

  return (
    <IconButton
      onMouseEnter={() => {
        if (data?.length > 0) {
          setShowNotification(true)
        }
      }}
      onMouseLeave={() => setShowNotification(false)}
      onClick={() => {
        if (data?.length > 0) {
          setShowNotification((prev) => !prev)
        }
      }}
      sx={{ borderRadius: "0", padding: "10px" }}
    >
      <FiBell style={{ color: "#fff", width: "20px" }} />

      {data.length > 0 && (
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
            left: "19px",
          }}
        >
          {data.length}
        </Typography>
      )}

      <Wrapper
        sx={{
          display: showNotification ? "block" : "none",
          color: "#fff",
          position: "absolute",
          top: "40px",
          cursor: "auto",
          width: "300px",
          border: "1px solid #202020",
          borderRadius: "4px",
        }}
      >
        <Box
          color="#fff"
          borderRadius="4px 4px 0 0"
          sx={{
            backgroundColor: "#03DAC6",
            padding: "10px",
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            Notification
          </Typography>
          <Typography variant="body2">
            You have {data.length} new{" "}
            {data.length > 1 ? "notifications" : "notification"}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#000",
            borderRadius: "0 0 4px 4px",
            padding: "18px",
          }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          {data.map((item: any) => (
            <>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
              >
                <Typography variant="body2" color="#03DAC6" fontWeight="bold">
                  yesterday
                </Typography>
                <Typography variant="body2" color="#50BB24">
                  yesterday
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                fontWeight="bold"
                textAlign="start"
                color="#A4A4A4"
                marginTop={0.4}
              >
                {item.message}
              </Typography>
            </>
          ))}
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
            Check all notification
          </Link>
        </Box>
      </Wrapper>
    </IconButton>
  )
}
