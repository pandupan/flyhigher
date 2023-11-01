"use client"

import { _renderCurrency, _renderNumeric } from "@/utils/number"
import {
  Alert,
  Box,
  IconButton,
  Modal,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { BiTrash } from "react-icons/bi"
import { BsDash, BsFillCartPlusFill, BsPlus } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import Input from "../ui/Input"
import UploadBox from "../postListing/UploadBox"
import { AddAPhoto } from "@mui/icons-material"
import { IoMdSave } from "react-icons/io"

const imageStyle = {
  width: "250px",
  height: "250px",
  borderRadius: "20px",
}

const bigImageStyle = {
  borderRadius: "40px",
  padding: "5px",
  "&:hover": {
    cursor: "pointer",
  },
}

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

type serviceFormCardProp = {
  preview?: string
  index: number
  data: any
  onRemove: any
  onUpdate: any
}

export const ServiceFormCard: React.FC<serviceFormCardProp> = ({
  preview,
  index,
  data,
  onRemove,
  onUpdate,
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(data.amount)
  const [image, setImage] = useState<File | null>(null)
  const [title, setTitle] = useState<string>(data.title)
  const [price, setPrice] = useState<number>(data.price)
  const maxSize = 2

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleCloseMessage = () => {
    setOpenMessage(false)
    setMessage("")
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

  const handleAddItemToCart = () => {
    console.log("add item in to cart")
  }

  const handleRemove = () => {
    if (!loading) {
      setLoading(() => true)
      onRemove()
      setLoading(() => false)
    }
  }

  const handleUpdate = () => {
    if (!loading) {
      setLoading(() => true)
      onUpdate({
        id_sub_product: data.id_sub_product,
        title: title,
        price: price,
        amount: quantity,
        image: image || "",
      })
      setLoading(() => false)
    }
  }

  return (
    <>
      <Box>
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
        
        <Stack spacing={4}>
          <div>
            <img
              src={
                (image && URL.createObjectURL(image)) ||
                preview ||
                `https://api.dicebear.com/6.x/initials/svg?seed=image`
              }
              style={imageStyle}
              onClick={handleOpen}
            />
          </div>
          <Stack spacing={2} alignContent={"center"} alignItems={"center"}>
            <h4 style={{ margin: 0 }}>{title}</h4>
            <div
              className="text-primary"
              style={{ fontWeight: 700, fontSize: "14px" }}
            >
              {_renderCurrency(price)}
            </div>
            <div>
              {/* <IconButton
                disabled={quantity === 1 ? true : false}
                onClick={handleDecrementQuantity}
              >
                <BsDash className="text-white" />
              </IconButton> */}
              {_renderNumeric(quantity)}
              {/* <IconButton onClick={handleIncrementQuantity}>
                <BsPlus className="text-white" />
              </IconButton> */}
            </div>
            <div>
              <IconButton
                style={{
                  backgroundColor: "red",
                  padding: "10px 20px",
                  borderRadius: "50px",
                }}
                onClick={handleRemove}
                disabled={loading}
              >
                <BiTrash className="text-white" />
              </IconButton>
            </div>
          </Stack>
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
              preview={preview}
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
                    onClick={handleUpdate}
                    disabled={loading}
                  >
                    <IoMdSave className="text-white" />
                  </IconButton>
                </div>
                <div>
                  <IconButton
                    style={{
                      backgroundColor: "red",
                      padding: "10px 20px",
                      borderRadius: "50px",
                    }}
                    onClick={handleRemove}
                    disabled={loading}
                  >
                    <BiTrash className="text-white" />
                  </IconButton>
                </div>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </Modal>
    </>
  )
}
