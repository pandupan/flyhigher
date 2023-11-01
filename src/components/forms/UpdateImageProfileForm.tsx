import { Alert, Snackbar } from "@mui/material"
import { useRef, useState } from "react"

type updateImageProfileFormProp = {
  maxSize?: number
  image: any
  setImage: React.Dispatch<React.SetStateAction<any>>
}

const imageStyle = {
  width: "100%",
  height: "100%",
  maxWidth: "200px",
  maxHeight: "200px",
  borderRadius: "9999px",
  margin: "0 auto",
  padding: "15px",
}

export const UpdateImageProfileForm: React.FC<updateImageProfileFormProp> = ({
  image,
  setImage,
  maxSize = 2,
}) => {
  const inputImageRef = useRef<any>()
  const [previewImage, setPreviewImage] = useState<any>(null)
  const [message, setMessage] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)

  const handleClose = () => {
    setMessage(() => "")
    setOpen(() => false)
  }

  const handleImageChange = (e: any) => {
    if (!e.target.files[0]) {
      return
    }
    console.log("picture: ", e.target.files)
    if (!['image/png', 'image/jpeg'].includes(e.target.files[0].type)) {
      setMessage(() => `Image extension not supported, upload png or jpg`)
      setOpen(() => true)
      return
    }
    if (e.target.files[0].size / 1024 > maxSize * 1024) {
      setMessage(() => `Image too large, max ${maxSize} Mb`)
      setOpen(() => true)
      return
    }
    setImage(() => e.target.files[0])
    setPreviewImage(() => URL.createObjectURL(e.target.files[0]))
  }

  return (
    <>
      <img
        src={previewImage || image}
        alt="your profile image"
        style={imageStyle}
        onClick={() => {
          inputImageRef?.current?.click()
        }}
      />
      <input
        ref={inputImageRef}
        type="file"
        hidden
        onChange={handleImageChange}
        accept="image/png, image/jpeg"
      />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert variant="filled" severity="error">{message}</Alert>
      </Snackbar>
    </>
  )
}
