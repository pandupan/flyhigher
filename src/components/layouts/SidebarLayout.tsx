import * as React from "react"
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import { menuDashboard } from "@/constants/menuDashboard"
import Link from "next/link"
import { signOut } from "next-auth/react"
import NotificationMenu from "../NotificationMenu"
import MessageBoxMenu from "../MessageBoxMenu"
import CartMenu from "../CartMenu"
import Image from "next/image"
import { Container, Typography } from "@mui/material"
import { useRouter } from "next/router"

const drawerWidth = 300

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}))

interface SidebarProps {
  children: React.ReactNode
}

export default function SidebarLayout(props: SidebarProps) {
  const { children } = props
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const router = useRouter()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "black", padding: "10px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              width: "100%",
              gap: 1,
            }}
          >
            <NotificationMenu />
            <MessageBoxMenu />
            <CartMenu />
            <Link href={"/"}>
              <Image
                src={"/logoHigher.png"}
                alt="Logo Higher"
                width={100}
                height={50}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Link href={"/"}>
            <Image
              src={"/logoHigher.png"}
              alt="Logo Higher"
              width={100}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center" }} marginY={2}>
          <Box
            sx={{
              width: 100,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "30px 0 0 30px",
              backgroundColor:
                router.pathname.split("/")[2] === "buyer" ? "#3dd2c0" : "black",
              cursor: "pointer",
            }}
            onClick={() => {
              if (router.pathname !== "/dashboard/buyer") {
                router.push("/dashboard/buyer")
              }
            }}
          >
            <Typography>Buyer</Typography>
          </Box>
          <Box
            sx={{
              width: 100,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0 30px 30px 0",
              backgroundColor:
                router.pathname.split("/")[2] === "seller"
                  ? "#3dd2c0"
                  : "black",
              cursor: "pointer",
            }}
            onClick={() => {
              if (router.pathname !== "/dashboard/seller") {
                router.push("/dashboard/seller")
              }
            }}
          >
            <Typography>Seller</Typography>
          </Box>
        </Box>
        <List>
          {menuDashboard.map((item, index) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{
                display: "block",
                backgroundColor:
                  router.pathname === item.link
                    ? "rgba(255, 255, 255, 0.08)"
                    : "",
              }}
            >
              <Link
                href={item.link}
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ display: "block" }}>
            <Box
              sx={{
                listStyle: "none",
                textDecoration: "none",
                color: "#fff",
              }}
              onClick={() => signOut()}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MailIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Logout"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Box>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Container>{children}</Container>
      </Box>
    </Box>
  )
}
