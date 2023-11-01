import { IconButton, Stack } from "@mui/material"
import { BiEdit } from "react-icons/bi"
import { BsFacebook, BsGoogle, BsTwitter, BsWhatsapp } from "react-icons/bs"
import { FiCheckCircle } from "react-icons/fi"
import { useState, useEffect } from "react"

type nameAboutSectionProp = {
  name: string
  about: string
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const buttonShareOther = {
  borderRadius: "9999px",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  cursor: "pointer",
  border: "none",
}

export const NameAboutSection: React.FC<nameAboutSectionProp> = ({
  name,
  about,
  setIsEdit,
}) => {
  const [currentUrl, setCurrentUrl] = useState<string>("")
  const handleButtonEdit = () => {
    setIsEdit(() => true)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window.innerHeight", window.innerHeight)
      setCurrentUrl(() => window.location.href)
    }
  }, [])

  return (
    <Stack direction={"column"} spacing={2}>
      <Stack
        spacing={1}
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <IconButton
            onClick={handleButtonEdit}
            color="primary"
            style={{ padding: 0 }}
          >
            <BiEdit />
          </IconButton>
          <h3>{name}</h3>
          <Stack textAlign={"end"} alignContent={"end"}>
            <IconButton color="secondary" size="small">
              <FiCheckCircle />
            </IconButton>
          </Stack>
        </Stack>
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <ShareProfile url={currentUrl} />
        </Stack>
      </Stack>

      <Stack spacing={1} direction={"column"}>
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <IconButton
            onClick={handleButtonEdit}
            color="primary"
            style={{ padding: 0 }}
          >
            <BiEdit />
          </IconButton>
          <h3>About Me</h3>
        </Stack>
        <p>{about}</p>
      </Stack>
    </Stack>
  )
}

const ShareProfile: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <a
        href={`http://www.facebook.com/sharer.php?u=${url}`}
        style={{
          ...buttonShareOther,
          backgroundColor: "#3B5998",
        }}
      >
        <BsFacebook />
      </a>
      <a
        href={`https://twitter.com/share?url=${url}&text=Simple%20Share%20Buttons&hashtags=simplesharebuttons`}
        style={{
          ...buttonShareOther,
          backgroundColor: "#55ACEE",
        }}
      >
        <BsTwitter />
      </a>
      <a
        href={`https://plus.google.com/share?url=${url}`}
        style={{
          ...buttonShareOther,
          backgroundColor: "#dd4b39",
        }}
      >
        <BsGoogle />
      </a>
      <a
        href={`whatsapp://send?text=${url}`}
        style={{
          ...buttonShareOther,
          backgroundColor: "#00b489",
        }}
      >
        <BsWhatsapp />
      </a>
    </Stack>
  )
}
