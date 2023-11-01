import { MainLayout } from "@/components/layouts/MainLayout"
import { HeadMeta } from "@/components/meta/HeadMeta"
import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"
import {
  MdAttachMoney,
  MdMiscellaneousServices,
  MdPayments,
} from "react-icons/md"
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { IoMdListBox } from "react-icons/io"
import { FaCheck, FaFileInvoiceDollar } from "react-icons/fa"
import { BsFillPlusSquareFill } from "react-icons/bs"
import ModalPayment from "./ModalPayment"
import { useState } from "react"

const IndexCheckoutPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <MainLayout>
        <HeadMeta />
        <Container maxWidth="xs">
          <Typography fontSize="18px" my={2} textAlign="center">
            Checkout
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <SiHomeassistantcommunitystore />
            <Typography fontSize="18px">In-Store Service</Typography>
          </Box>
          <Box mt={3}>
            <Box display="flex" alignItems="center" gap={2}>
              <MdMiscellaneousServices size="1.5em" />
              <Typography fontSize="16px">Service Detail</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} my={2}>
              <Box borderRadius="20px" overflow="hidden">
                <Image
                  src="https://picsum.photos/150"
                  width={150}
                  height={150}
                  alt="img-service"
                />
              </Box>
              <Typography fontSize="14px">Accu Store</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <IoMdListBox size="1.5em" />
              <Typography fontSize="18px">Order Details (2item)</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography fontSize="16px">Pasang Aki</Typography>
              <Typography fontSize="16px">Rp. 250.000</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography fontSize="16px">+ Inspeksi Aki</Typography>
              <Typography fontSize="16px">Rp. 20.000</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography fontSize="16px">Admin Fee</Typography>
              <Typography fontSize="16px">Rp. 1.000</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              mb={1}
              color="primary.main"
            >
              <Typography fontSize="18px">Total Payment</Typography>
              <Typography fontSize="18px">Rp. 253.000</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <MdPayments size="1.5em" />
              <Typography fontSize="16px">Payment Method</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
              mt={2}
              mb={1}
              bgcolor="#202020"
              p={1}
              borderRadius="6px"
            >
              <FaFileInvoiceDollar size="1.5em" />
              <Typography fontSize="16px">PT. Taste Sejahtera</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
              mb={1}
              bgcolor="#202020"
              p={1}
              borderRadius="6px"
            >
              <MdAttachMoney size="1.5em" />
              <Typography fontSize="16px">Cash / Debit or Credit</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
              mb={10}
              bgcolor="#202020"
              p={1}
              borderRadius="6px"
            >
              <BsFillPlusSquareFill size="1.5em" />
              <Typography fontSize="16px">Other Options</Typography>
            </Box>
            <Button
              onClick={handleOpen}
              sx={{
                width: "100%",
                backgroundColor: "#2dd4bf",
                color: "white",
                borderRadius: "6px",
                gap: 1,
              }}
            >
              <FaCheck />
              Confirm
            </Button>
          </Box>
        </Container>
      </MainLayout>

      <ModalPayment open={open} handleClose={handleClose} />
    </>
  )
}

export default IndexCheckoutPage
