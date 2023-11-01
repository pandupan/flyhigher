import { ChangeEvent, useRef } from "react"

import { Box, Typography } from "@mui/material"

type Props = {
  title: string
  icon: React.ReactNode
  variant: "large" | "medium"
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  image?: File | null
  preview?: string | null
}

const imageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  objectFit: "cover",
}

export default function UploadBox({
  title,
  icon,
  image,
  variant,
  name,
  onChange,
  preview,
}: Props) {
  const refInput = useRef<any>()

  return (
    <Box
      sx={{
        aspectRatio: "1/1",
        cursor: "pointer",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px",
        bgcolor: "#1a1a1a",
        padding: image || preview ? "0" : variant === "large" ? "40px" : "15px",
        textAlign: "center",
      }}
      onClick={() => {
        if (!image && !preview) {
          refInput.current.click()
        }
      }}
    >
      <input
        id="add-attachment"
        type="file"
        accept="image/png, image/jpeg"
        name={name}
        hidden
        onChange={onChange}
        ref={refInput}
      />
      {!image && !preview ? (
        <>
          <Typography
            variant={variant === "large" ? "h4" : "h6"}
            position={"absolute"}
            display={"block"}
            style={{ margin: "0 auto" }}
          >
            {title}
          </Typography>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              "& svg": {
                width: variant === "large" ? 100 : 80,
                height: variant === "large" ? 100 : 80,
              },
            }}
          >
            {icon}
          </Box>
        </>
      ) : (
        <Box
          sx={{
            aspectRatio: "1/1",
            cursor: "pointer",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            bgcolor: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <img
            src={
              (image && URL.createObjectURL(image)) ||
              preview ||
              `https://api.dicebear.com/6.x/initials/svg?seed=Image`
            }
            style={imageStyle}
            onClick={() => {
              refInput.current.click()
            }}
          />
        </Box>
      )}
    </Box>
  )
}
