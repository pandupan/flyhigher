"use client"
import { convertNumberToIDR } from "@/utils/number"
import {
  Article,
  Build,
  Check,
  Payment,
  Payments,
  Store,
} from "@mui/icons-material"
import { Box, Button, Modal, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

const dummyData = [
  {
    id: 1,
    title: "Pasang Aki",
    price: "250000",
  },
  {
    id: 2,
    title: "Inspeksi Aki",
    price: "20000",
  },
  {
    id: 3,
    title: "Admin Fee",
    price: "1000",
  },
]

const dummyPayment = [
  {
    id: 1,
    title: "PT. Taste Sejahtera",
  },
  {
    id: 2,
    title: "Cash / Debit or Credit",
  },
  {
    id: 3,
    title: "Other Options",
  },
]

const ModalCheckout = ({ open, handleClose }: any) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography>Checkout</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Store />
            <Typography>In-Store Service</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }} marginY={3}>
          <Build />
          <Typography>Service Details</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            src={"/banana.jpeg"}
            width={150}
            height={150}
            alt="Service Photo"
            style={{ borderRadius: "20px" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Image
              src={"/banana.jpeg"}
              width={50}
              height={50}
              alt="Service Photo"
              style={{ borderRadius: "50%" }}
            />
            <Typography>Accu Store</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          marginY={3}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Article />
            <Typography>Order Details</Typography>
          </Box>
          <Typography color={"#11a100"} sx={{ cursor: "pointer" }}>
            Edit
          </Typography>
        </Box>
        {dummyData.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            marginY={2}
          >
            <Typography>{item.title}</Typography>
            <Typography>{convertNumberToIDR(item.price)}</Typography>
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          marginY={3}
        >
          <Typography color={"#3dd2c0"}>Total Payment</Typography>
          <Typography color={"#3dd2c0"}>
            {convertNumberToIDR("253000")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }} marginY={3}>
          <Payments />
          <Typography>Payment Method</Typography>
        </Box>
        {dummyPayment.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
            marginY={2}
          >
            <Payment />
            <Typography>{item.title}</Typography>
          </Box>
        ))}
        <Box sx={{ display: "flex", justifyContent: "center" }} marginTop={3}>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              width: 350,
              borderRadius: "5px",
            }}
          >
            <Check />
            <Typography>Confirm</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalCheckout
