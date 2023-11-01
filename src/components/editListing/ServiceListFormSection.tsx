"use client"

import {
  Alert,
  Box,
  Button,
  IconButton,
  Modal,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material"
import { BsDash, BsPlus, BsTools } from "react-icons/bs"
import { ServiceFormCard } from "../cards/ServiceFormCard"
import { useState, useEffect } from "react"
import { FcCancel } from "react-icons/fc"
import { IoMdSave } from "react-icons/io"
import { _renderCurrency, _renderNumeric } from "@/utils/number"
import Input from "../ui/Input"
import { AddAPhoto } from "@mui/icons-material"
import UploadBox from "./UploadBox"
import { CgClose } from "react-icons/cg"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh",
  background: "black",
  border: "none",
  boxShadow: 24,
  padding: "20px",
  overflow: "auto",
  outline: "none",
}

type serviceListFormSectionProp = {
  onAddService: any
  onRemoveService: any
  onUpdateService: any
  data: any[]
}

export const ServiceListFormSection: React.FC<serviceListFormSectionProp> = ({
  onAddService,
  onRemoveService,
  onUpdateService,
  data = [],
}) => {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(0)
  const [image, setImage] = useState<File | null>(null)
  const [title, setTitle] = useState<string>("")
  const [price, setPrice] = useState<number>(0)

  const maxSize = 2

  const handleOpen = () => {
    setEmpty()
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setEmpty()
  }
  const handleCloseMessage = () => {
    setOpenMessage(false)
    setMessage("")
  }

  const setEmpty = () => {
    setImage(() => null)
    setQuantity(() => 0)
    setTitle(() => "")
    setPrice(() => 0)
  }

  const handleChangeImage = (e: any) => {
    if (!["image/png", "image/jpeg"].includes(e.target.files[0].type)) {
      setMessage(() => `Image extension not supported, upload png or jpg`)
      setOpenMessage(() => true)
      return
    }
    if (e.target.files[0].size / 1024 > maxSize * 1024) {
      setMessage(() => `Image too large, max ${maxSize} Mb`)
      setOpenMessage(() => true)
      return
    }

    setImage(e.target.files[0] || null)
  }

  const handleIncrementQuantity = () => {
    setQuantity(() => quantity + 1)
  }

  const handleDecrementQuantity = () => {
    setQuantity((currentValue) => {
      if (currentValue === 1) {
        return currentValue
      }
      return quantity - 1
    })
  }

  const handleAddService = async () => {
    await onAddService({
      title,
      price,
      image,
      amount: quantity,
      type: "service",
    })
    handleClose()
  }

  useEffect(() => {
    setServices(() => data)
  }, [data])

  return (
    <Stack spacing={1}>
      <Snackbar
        open={openMessage}
        autoHideDuration={3000}
        onClose={handleCloseMessage}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert variant="filled" severity="error">
          {message}
        </Alert>
      </Snackbar>

      <Box sx={{ width: "100%" }}>
        <Stack
          spacing={2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <BsTools />
            <h3>Service List</h3>
          </Stack>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BsPlus />}
            onClick={handleOpen}
          >
            Add Services
          </Button>
        </Stack>
      </Box>
      <Box sx={{ width: "100%", overflow: "auto" }}>
        <Stack spacing={4} direction={"row"} sx={{ padding: "30px 0" }}>
          {services?.map((item, idx) => (
            <ServiceFormCard
              key={idx}
              index={idx}
              data={item}
              preview={item.image_sub_product}
              onUpdate={onUpdateService}
              onRemove={() => onRemoveService(idx)}
            />
          ))}
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack style={style}>
          <CgClose
            onClick={handleClose}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "15px",
              top: "15px",
              zIndex: 2,
            }}
          />
          <Stack>
            <UploadBox
              title=""
              variant="large"
              name="imageOne"
              onChange={handleChangeImage}
              image={image}
              icon={
                <Box
                  sx={{
                    color: "#fff",
                    borderRadius: "20px",
                    padding: "20px",
                    border: "1px solid #202020",
                  }}
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <AddAPhoto />
                    <Typography variant="h5">Add Picture Here</Typography>
                  </Stack>
                </Box>
              }
            />
          </Stack>

          <Typography
            id="modal-modal-title"
            sx={{ mt: 2, textAlign: "center", fontWeight: "bold" }}
          >
            <Input
              placeholder="Title of service"
              value={title}
              onChange={(e: any) => setTitle(() => e.target.value)}
            />
          </Typography>

          <div id="modal-modal-description">
            <Typography sx={{ my: 2, textAlign: "left", fontSize: "12px" }}>
              <Input
                placeholder="Price of service"
                value={price}
                onChange={(e: any) =>
                  setPrice(() => e.target.value?.replace(/\D/g, ""))
                }
              />
            </Typography>

            <Stack
              spacing={2}
              alignContent={"center"}
              alignItems={"center"}
              fontFamily={"Montserrat"}
            >
              <div
                className="text-primary"
                style={{ fontWeight: 700, fontSize: "14px" }}
              >
                {_renderCurrency(price)}
              </div>
              <div style={{ fontWeight: "bold" }}>
                <IconButton
                  disabled={quantity === 1 ? true : false}
                  onClick={handleDecrementQuantity}
                >
                  <BsDash className="text-white" />
                </IconButton>
                {_renderNumeric(quantity)}
                <IconButton onClick={handleIncrementQuantity}>
                  <BsPlus className="text-white" />
                </IconButton>
              </div>
              <Stack direction={"row"} spacing={4}>
                <div>
                  <IconButton
                    style={{
                      backgroundColor: "#12e231",
                      padding: "10px 20px",
                      borderRadius: "50px",
                    }}
                    onClick={handleAddService}
                    disabled={loading}
                  >
                    <IoMdSave className="text-white" />
                  </IconButton>
                </div>
                <div>
                  <IconButton
                    style={{
                      backgroundColor: "white",
                      padding: "10px 20px",
                      borderRadius: "50px",
                    }}
                    onClick={handleClose}
                    disabled={loading}
                  >
                    <FcCancel className="text-white" />
                  </IconButton>
                </div>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </Modal>
    </Stack>
  )
}
