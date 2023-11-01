"use client"
import React, { useEffect, useState } from "react"
import { Box, IconButton, Link, Stack, Typography } from "@mui/material"
import { FiShoppingCart, FiX } from "react-icons/fi"
import Image from "next/image"
import { styled } from "@mui/material/styles"
import { deleteCart, getCart } from "@/api-services/headerService"

const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    right: "-50px",
  },
  [theme.breakpoints.up("md")]: {
    right: "0",
  },
}))

export default function CartMenu() {
  const [showCart, setShowCart] = React.useState(false)
  const [data, setData] = useState<any>([])
  const [subTotal, setSubTotal] = useState<any>("")

  useEffect(() => {
    const fetch = async () => {
      const data = await getCart()
      setData(data?.data.data)
      const total = data?.data.data.reduce(
        (a: any, b: any) =>
          a + Number(b.total.split("Rp. ")[1].split(".").join("")),
        0
      )
      setSubTotal(total)
    }

    fetch()
  }, [])

  return (
    <IconButton
      onMouseEnter={() => {
        if (data?.length > 0) {
          setShowCart(true)
        }
      }}
      onMouseLeave={() => setShowCart(false)}
      onClick={() => {
        if (data?.length > 0) {
          setShowCart((prev) => !prev)
        }
      }}
      sx={{ borderRadius: "0", padding: "10px" }}
    >
      <FiShoppingCart style={{ color: "#fff", width: "20px" }} />

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
          top: "-1px",
          left: "22px",
        }}
      >
        {data.length}
      </Typography>

      <Wrapper
        border="1px solid #202020"
        borderRadius="4px"
        sx={{
          color: "#fff",
          position: "absolute",
          top: "40px",
          display: showCart ? "block" : "none",
          cursor: "auto",
          width: "340px",
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
            Shopping Cart
          </Typography>
          <Typography variant="body2">
            You have {data.length} {data.length > 1 ? "items" : "item"} in your
            cart
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
          {data.map((item: any, index: number) => (
            <Link href="#" underline="none" key={index}>
              <Stack
                justifyContent="space-between"
                direction="row"
                alignItems="center"
                spacing={2}
              >
                <Image
                  src={item.image_product_1_url}
                  alt="Profile picture"
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                />

                <Box sx={{ color: "#fff" }} textAlign="left">
                  <Typography variant="body2" fontWeight="bold" marginTop={0.4}>
                    {item.product_name}
                  </Typography>
                  <Typography variant="body2" marginTop={0.5}>
                    {item.total}
                  </Typography>
                </Box>

                <FiX
                  style={{
                    color: "#fff",
                    width: "30px",
                    height: "auto",
                    padding: "5px",
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    try {
                      deleteCart(localStorage.getItem("token_higher") ?? "", {
                        id_product: item.id_product,
                      })
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                />
              </Stack>
            </Link>
          ))}

          <Stack direction="row" justifyContent="space-between" marginY={1.4}>
            <Typography>Subtotal:</Typography>
            <Typography>Rp. {subTotal?.toLocaleString("id-ID")}</Typography>
          </Stack>

          <Link
            href="/member/cart"
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
            View Cart
          </Link>
        </Box>
      </Wrapper>
    </IconButton>
  )
}
