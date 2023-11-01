import { Stack } from "@mui/material"

type baseEmptySectionProp = {
  message?: string
}

export const BaseEmptySection: React.FC<baseEmptySectionProp> = ({
  message = "No Data",
}) => {
  return (
    <Stack alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
      {message}
    </Stack>
  )
}
