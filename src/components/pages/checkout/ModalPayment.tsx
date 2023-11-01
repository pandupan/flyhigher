import { Box, Button } from "@mui/material"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import { BsQrCode, BsQrCodeScan } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { MdPayments, MdPhotoCamera } from "react-icons/md"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

interface ModalPaymentInterface {
  open: boolean
  handleClose: () => void
}

export default function ModalPayment(props: ModalPaymentInterface) {
  const { open, handleClose } = props

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" mb={4}>
            <IoMdClose
              onClick={handleClose}
              size="2em"
              style={{ marginLeft: "auto", cursor: "pointer" }}
            />
          </Box>
          <Box display="flex" gap={2}>
            <Box borderRadius="10px" overflow="hidden">
              <Image
                src="https://picsum.photos/50"
                width={50}
                height={50}
                alt="img-service"
              />
            </Box>
            <Box>
              <Typography fontSize="14px" mb={1}>
                PT. Higher Sejahtera
              </Typography>
              <Typography fontSize="14px">No. Rekening XXX XXX XXX</Typography>
            </Box>
            <Typography fontSize="14px" color="error.main" ml="auto">
              Salin
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            mt={4}
          >
            <BsQrCodeScan size="1.5em" />
            <Typography fontSize="16px">Scan QR (On Other Device)</Typography>
          </Box>
          <Box display="flex" mt={2}>
            <Box
              p={2}
              m="auto"
              borderRadius="20px"
              bgcolor="white"
              color="black"
            >
              <BsQrCode size="8em" />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Box
              p={1}
              borderRadius="9999px"
              bgcolor="green"
              width="32px"
              height="32px"
            >
              <MdPhotoCamera size="2em" />
            </Box>
          </Box>
          <Typography fontSize="12px" color="grey" textAlign="center" mt={1}>
            - To Access Your Camera -
          </Typography>
          <Box display="flex" alignItems="center" gap={2} mt={4} mb={1}>
            <MdPayments size="1.5em" />
            <Typography fontSize="16px">Cara Pembayaran</Typography>
          </Box>
          <iframe
            width="100%"
            height="225"
            src="https://www.youtube.com/embed/gG5kLlfZcik"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Typography fontSize="16px" textAlign="center" mt={4}>
            Upload Proof of Payment
          </Typography>
          <Box display="flex" mt={2}>
            <Box
              px={8}
              py={4}
              m="auto"
              borderRadius="20px"
              bgcolor="white"
              color="grey"
            >
              <MdPhotoCamera size="5em" />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
