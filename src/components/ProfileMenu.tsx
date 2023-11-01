import { Box, IconButton, Link, Stack, Typography } from "@mui/material"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import React from "react"
import {
  FiArchive,
  FiBriefcase,
  FiHeadphones,
  FiLogOut,
  FiMessageSquare,
  FiMonitor,
  FiUpload,
  FiUser,
} from "react-icons/fi"

export default function ProfileMenu({ user }: any) {
  const [showProfileMenu, setShowProfileMenu] = React.useState(false)

  return (
    <IconButton
      onMouseEnter={() => setShowProfileMenu(true)}
      onMouseLeave={() => setShowProfileMenu(false)}
      sx={{ borderRadius: "0", padding: "10px" }}
    >
      <Image
        src={user?.user?.image ? user.user.image : "/user.svg"}
        alt="User picture"
        width={35}
        height={35}
        style={{ borderRadius: "4px", objectFit: "cover" }}
      />

      <Box
        border="1px solid #202020"
        sx={{
          color: "#fff",
          position: "absolute",
          top: "50px",
          right: "0",
          display: showProfileMenu ? "block" : "none",
          cursor: "auto",
          backgroundColor: "#000",
          padding: "16px",
          borderRadius: "4px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#000",
          }}
          display="flex"
          flexDirection="column"
          gap={2.4}
        >
          <Link
            href="/post_skill"
            underline="none"
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ "&:hover": { color: "#03DAC6" } }}
          >
            <FiBriefcase style={{ height: "18px" }} />
            <Typography
              fontWeight="bold"
              textAlign="left"
              noWrap
              variant="body2"
            >
              Post Your Service
            </Typography>
          </Link>

          <Link
            href="/dashboard"
            underline="none"
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ "&:hover": { color: "#03DAC6" } }}
          >
            <FiMonitor style={{ height: "18px" }} />
            <Typography
              fontWeight="bold"
              textAlign="left"
              noWrap
              variant="body2"
            >
              Dashboard
            </Typography>
          </Link>

          <Link
            href="/index"
            underline="none"
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ "&:hover": { color: "#03DAC6" } }}
          >
            <FiArchive style={{ height: "18px" }} />
            <Typography
              fontWeight="bold"
              textAlign="left"
              noWrap
              variant="body2"
            >
              Orders
            </Typography>
          </Link>

          <Link
            href="/withdraw"
            underline="none"
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ "&:hover": { color: "#03DAC6" } }}
          >
            <FiUpload style={{ height: "18px" }} />
            <Typography
              fontWeight="bold"
              textAlign="left"
              noWrap
              variant="body2"
            >
              Withdraw
            </Typography>
          </Link>

          <Link
            href="/profile"
            underline="none"
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ "&:hover": { color: "#03DAC6" } }}
          >
            <FiUser style={{ height: "18px" }} />
            <Typography
              fontWeight="bold"
              textAlign="left"
              noWrap
              variant="body2"
            >
              My Profile
            </Typography>
          </Link>

          <Link
            href="/we_care"
            underline="none"
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ "&:hover": { color: "#03DAC6" } }}
          >
            <FiHeadphones style={{ height: "18px" }} />
            <Typography
              fontWeight="bold"
              textAlign="left"
              noWrap
              variant="body2"
            >
              We Care
            </Typography>
          </Link>

          <Link
            href="/chat"
            underline="none"
            color="#fff"
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ "&:hover": { color: "#03DAC6" } }}
          >
            <FiMessageSquare style={{ height: "18px" }} />
            <Typography
              fontWeight="bold"
              textAlign="left"
              noWrap
              variant="body2"
            >
              Chat
            </Typography>
          </Link>
          <Box
            sx={{
              "&:hover": { color: "#03DAC6" },
              underline: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.removeItem("token_higher")
              signOut({ callbackUrl: "/" })
            }}
          >
            <FiLogOut style={{ height: "18px" }} />
            <Typography
              fontWeight="bold"
              textAlign="left"
              noWrap
              variant="body2"
            >
              Logout
            </Typography>
          </Box>
        </Box>
      </Box>
    </IconButton>
  )
}
