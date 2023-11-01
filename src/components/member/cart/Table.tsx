import { Delete, ShoppingBag, ShoppingCart } from "@mui/icons-material"
import { Box, Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import ModalCheckout from "./ModalCheckout"

interface CartProps {
  data?: any
}

const TableCart = ({ data }: CartProps) => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {isModalOpen && (
        <ModalCheckout
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
      )}
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={2} marginLeft={0} marginTop={0}>
          <Grid xs={2}>
            <Typography>Product</Typography>
          </Grid>
          <Grid xs={4}>
            <Typography>Product Name</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>Price</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>Action</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>Total</Typography>
          </Grid>
        </Grid>
        {data?.map((item: any) => (
          <Grid
            key={item.id}
            container
            spacing={2}
            marginLeft={0}
            marginTop={3}
            alignItems={"center"}
          >
            <Grid xs={2}>
              <Image
                src={item.productImage}
                alt="product image"
                width={50}
                height={50}
              />
            </Grid>
            <Grid xs={4}>
              <Typography>{item.product_name}</Typography>
            </Grid>
            <Grid xs={2}>
              <Typography>{item.price}</Typography>
            </Grid>
            <Grid xs={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#dc3545",
                  borderRadius: "20px",
                  width: "70px",
                  cursor: "pointer",
                }}
              >
                <Delete />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Typography>{item.total}</Typography>
            </Grid>
          </Grid>
        ))}
        <Grid
          container
          spacing={2}
          marginLeft={0}
          marginTop={4}
          justifyContent={"end"}
        >
          <Grid xs={2}>
            <Typography>Total Price</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>Rp.50.000</Typography>
          </Grid>
        </Grid>
        <Box
          display={"flex"}
          sx={{ width: "100%" }}
          justifyContent={"end"}
          gap={4}
          marginTop={4}
        >
          <Button
            onClick={() => router.push("/")}
            variant="contained"
            sx={{ display: "flex", gap: 1, backgroundColor: "#f73164" }}
          >
            <ShoppingBag />
            <Typography sx={{ fontSize: 12 }}>Continue Shopping</Typography>
          </Button>
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="contained"
            sx={{ display: "flex", gap: 1, backgroundColor: "#51bb25" }}
          >
            <ShoppingCart />
            <Typography sx={{ fontSize: 12 }}>Checkout</Typography>
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default TableCart
