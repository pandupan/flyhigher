import { IconButton, Stack, Typography } from "@mui/material"
import { BiEdit } from "react-icons/bi"
import { FiCheckCircle } from "react-icons/fi"

type verifyInfoSectionProp = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export const VerifyInfoSection: React.FC<verifyInfoSectionProp> = ({
  setIsEdit,
}) => {
  const handleButtonEdit = () => {
    setIsEdit(() => true)
  }
  return (
    <Stack direction={"column"}>
      <Stack spacing={2} direction={"row"} alignItems={"center"}>
        <IconButton onClick={handleButtonEdit}>
          <BiEdit />
        </IconButton>
        <Typography width={"100%"} whiteSpace={"nowrap"}>
          Email Address
        </Typography>
        <Stack textAlign={"end"} alignContent={"end"}>
          <IconButton color="secondary" size="small">
            <FiCheckCircle />
          </IconButton>
        </Stack>
      </Stack>
      <Stack spacing={2} direction={"row"} alignItems={"center"}>
        <IconButton onClick={handleButtonEdit}>
          <BiEdit />
        </IconButton>
        <Typography width={"100%"} whiteSpace={"nowrap"}>
          Phone Number
        </Typography>
        <Stack textAlign={"end"} alignContent={"end"}>
          <IconButton color="secondary" size="small">
            <FiCheckCircle />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
