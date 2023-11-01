import {
  Box,
  Stack,
  Container,
  Link,
  TextField,
  IconButton,
  Paper,
  InputBase,
  Select,
  MenuItem,
} from "@mui/material"
import Image from "next/image"
import { FiSearch, FiMonitor } from "react-icons/fi"
import NotificationMenu from "../NotificationMenu"
import MessageBoxMenu from "../MessageBoxMenu"
import CartMenu from "../CartMenu"
import ProfileMenu from "../ProfileMenu"
import { styled } from "@mui/material/styles"
import { useState } from "react"

const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}))

const WrapperSearch = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}))

const WrapperSearchMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}))

const WrapperLogin = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: "#3dd2c0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "15px",
  },
}))

const options = [
  {
    id: 0,
    value: "Jenis Jasa",
    label: "Jenis Jasa",
  },
  {
    id: 1,
    value: "Freelance",
    label: "Freelance",
  },
  {
    id: 2,
    value: "Jastip",
    label: "Jastip",
  },
  {
    id: 3,
    value: "Bisnis",
    label: "Bisnis",
  },
]

export const Navbar = ({ isLoggedIn, user }: any) => {
  const [jenisJasa, setJenisJasa] = useState<string>("")

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#000",
        zIndex: 100,
        padding: "20px 0",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Wrapper>
            <Link href="/">
              <Image
                src="/logoHigher.png"
                alt="Logo Higher"
                width={300}
                height={50}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </Wrapper>

          <WrapperSearch>
            <Paper
              sx={{
                width: { xs: "100%", sm: "500px" },
                display: "flex",
                alignItems: "center",
                p: "2px 4px",
                height: 50,
              }}
            >
              <IconButton sx={{ width: 150, height: 50 }}>
                <Select
                  defaultValue={options[0].value}
                  onChange={(e) => {
                    setJenisJasa(e.target.value)
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: "0px",
                    color: "#fff",
                  }}
                >
                  {options.map((item) => (
                    <MenuItem
                      value={item.value}
                      key={item.id}
                      disabled={item.id === 0}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, padding: 2 }}
                placeholder="Cari Jasa..."
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <FiSearch style={{ color: "#8e8e92", cursor: "pointer" }} />
              </IconButton>
            </Paper>
          </WrapperSearch>

          <WrapperSearchMobile>
            <TextField
              placeholder="Cari Jasa..."
              size="small"
              sx={{ width: { xs: "100%", sm: "500px" } }}
              InputProps={{
                style: {
                  color: "#fff",
                  backgroundColor: "#202020",
                  borderRadius: "20px",
                },
                endAdornment: (
                  <FiSearch style={{ color: "#8e8e92", cursor: "pointer" }} />
                ),
              }}
            />
          </WrapperSearchMobile>

          <Stack
            direction="row"
            alignItems="center"
            spacing={isLoggedIn ? 0.2 : 2}
          >
            {isLoggedIn ? (
              <>
                <Wrapper>
                  <Link href="/dashboard/seller/your-listing">
                    <IconButton sx={{ borderRadius: "0", padding: "10px" }}>
                      <FiMonitor style={{ color: "#fff", width: "20px" }} />
                    </IconButton>
                  </Link>
                </Wrapper>
                <NotificationMenu />
                <MessageBoxMenu />
                <CartMenu />
                <ProfileMenu user={user} />
              </>
            ) : (
              <>
                <WrapperLogin>
                  <Link
                    href="/login"
                    color="#fff"
                    underline="none"
                    fontWeight="bold"
                  >
                    Login
                  </Link>
                </WrapperLogin>

                <Wrapper>
                  <Link
                    href="/register"
                    underline="none"
                    color="#fff"
                    noWrap
                    fontWeight="bold"
                    sx={{
                      fontSize: "14px",
                      backgroundColor: "#03DAC6",
                      padding: "12px 28px",
                      borderRadius: "999px",
                      "&:hover": { backgroundColor: "#03c4b1" },
                    }}
                  >
                    Daftar{" "}
                    <Box component="span" color="red">
                      GRATIS!
                    </Box>
                  </Link>
                </Wrapper>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
