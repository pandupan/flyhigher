import { _renderCurrency, _renderNumeric } from "@/utils/number"
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { BsDash, BsFillCartPlusFill, BsPlus } from "react-icons/bs"
import { CgClose } from "react-icons/cg"

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

export const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(1)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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

  const handleAddItemToCart = () => {
    console.log("add item in to cart")
  }

  return (
    <>
      <Box>
        <Stack spacing={4}>
          <div>
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=avatar`}
              style={imageStyle}
              onClick={handleOpen}
            />
          </div>
          <Stack spacing={2} alignContent={"center"} alignItems={"center"}>
            <h4 style={{ margin: 0 }}>Service Name</h4>
            <div
              className="text-primary"
              style={{ fontWeight: 700, fontSize: "14px" }}
            >
              {_renderCurrency(25000)}
            </div>
            <div>
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
            <div>
              <IconButton
                style={{
                  backgroundColor: "#12e231",
                  padding: "10px 20px",
                  borderRadius: "50px",
                }}
              >
                <BsFillCartPlusFill className="text-white" />
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
            }}
          />
          <Stack>
            <img
              src="https://api.dicebear.com/6.x/initials/svg?seed=avatar"
              alt="avatar"
              loading="lazy"
              style={{
                ...bigImageStyle,
                maxWidth: "400px",
                maxHeight: "400px",
                margin: "0 auto",
              }}
            />
          </Stack>

          <Typography
            id="modal-modal-title"
            sx={{ mt: 2, textAlign: "center", fontWeight: "bold" }}
          >
            Lays 2 in 1 Thailand
          </Typography>

          <div id="modal-modal-description">
            <Typography sx={{ my: 2, textAlign: "left", fontSize: "12px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              minus accusantium magnam possimus ut asperiores iusto in beatae
              atque distinctio, eligendi, quaerat, veritatis vel maxime veniam
              doloribus laboriosam perferendis temporibus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Dolorem minus accusantium
              magnam possimus ut asperiores iusto in beatae atque distinctio,
              eligendi, quaerat, veritatis vel maxime veniam doloribus
              laboriosam perferendis temporibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolorem minus accusantium magnam
              possimus ut asperiores iusto in beatae atque distinctio, eligendi,
              quaerat, veritatis vel maxime veniam doloribus laboriosam
              perferendis temporibus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorem minus accusantium magnam possimus ut
              asperiores iusto in beatae atque distinctio, eligendi, quaerat,
              veritatis vel maxime veniam doloribus laboriosam perferendis
              temporibus.
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
                {_renderCurrency(25000)}
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
              <div>
                <IconButton
                  style={{
                    backgroundColor: "#12e231",
                    padding: "10px 20px",
                    borderRadius: "50px",
                  }}
                >
                  <BsFillCartPlusFill className="text-white" />
                </IconButton>
              </div>
            </Stack>
          </div>
        </Stack>
      </Modal>
    </>
  )
}
