import { CatalogueCard } from "@/components/cards/CatalogueCard"
import { Grid, Stack, Modal } from "@mui/material"
import { useState } from "react"
import { CgClose } from "react-icons/cg"
import Carousel from "react-material-ui-carousel"

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
  width: "100%",
  maxWidth: "90vw",
  maxHeight: "100vh",
  background: "black",
  border: "none",
  borderRadius: "20px",
  boxShadow: 24,
  padding: "40px",
  overflow: "auto",
  outline: "none",
}

export const CatalogServiceSection = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Grid container spacing={0} gap={0}>
        <Grid item xs={12} sm={6}>
          <CatalogueCard onClick={handleOpen} />
        </Grid>
        <Grid item xs={12} sm={6} container gap={0}>
          <Grid item xs={12} container gap={0}>
            <Grid item xs={6}>
              <CatalogueCard onClick={handleOpen} />
            </Grid>
            <Grid item xs={6}>
              <CatalogueCard onClick={handleOpen} />
            </Grid>
          </Grid>

          <Grid item xs={12} container gap={0}>
            <Grid item xs={6}>
              <CatalogueCard onClick={handleOpen} />
            </Grid>
            <Grid item xs={6}>
              <CatalogueCard onClick={handleOpen} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

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
              right: "20px",
              top: "20px",
            }}
          />
          <Carousel
            navButtonsAlwaysVisible={true}
            next={(next: any, active: any) =>
              console.log(`we left ${active}, and are now at ${next}`)
            }
            prev={(prev: any, active: any) =>
              console.log(`we left ${active}, and are now at ${prev}`)
            }
          >
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
            <Stack>
              <img
                src="https://api.dicebear.com/6.x/initials/svg?seed=Buaya"
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
          </Carousel>
        </Stack>
      </Modal>
    </>
  )
}
