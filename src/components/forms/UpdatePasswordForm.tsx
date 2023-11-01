import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { useMutation } from "react-query"
import { useState } from "react"
import { updatePassword } from "@/api-services/profileService"

type updatePasswordFormProp = {
  isEdit: boolean
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setOpenSuccess: React.Dispatch<React.SetStateAction<boolean>>
  setOpenError: React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdatePasswordForm: React.FC<updatePasswordFormProp> = ({
  isEdit,
  setIsEdit,
  setMessage,
  setOpenSuccess,
  setOpenError,
}) => {
  const [currentPassword, setCurrentPassword] = useState<string>("")
  const [newPassword, setNewPassword] = useState<string>("")

  const mutation = useMutation({
    mutationFn: (formData: any) => updatePassword(formData),
    onSuccess: async () => {
      setIsEdit(() => false)
      setMessage(() => "Success update your password")
      setOpenSuccess(() => true)
    },
    onError: (error: any) => {
      console.log("error mutation", error?.response?.data?.message)

      setMessage(() => error?.response?.data?.message ?? "Something went wrong")
      setOpenError(() => true)
    },
  })

  const tokenUser = "WmlCb0RxdnpyajN4M3RZaG55Ujl4QT09"
  // const tokenUser = "Q1IzOGdVVzVESjVESkxxV0tZbU5wZz09" // for test update password

  const handleUpdatePassword: any = (e: MouseEvent) => {
    e.preventDefault()
    let payload = {
      current_password: currentPassword,
      new_password: newPassword,
      id_user: tokenUser,
    }
    mutation.mutate(payload)
  }

  return (
    <Stack spacing={2} direction={"column"}>
      <form>
        <Typography color={"primary"} sx={{ p: 1 }}>
          Change Password
        </Typography>
        <FormControl fullWidth sx={{ p: 1 }}>
          <TextField
            required
            id="currentPassword"
            label="Current Password"
            type="password"
            variant="outlined"
            value={currentPassword}
            placeholder="Current Password"
            onChange={(e) => setCurrentPassword(e?.target?.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ p: 1 }}>
          <TextField
            id="newPassword"
            label="New Password"
            variant="outlined"
            type="password"
            value={newPassword}
            placeholder="New Password"
            onChange={(e) => setNewPassword(e?.target?.value)}
          />
        </FormControl>
        <FormControl sx={{ p: 1 }}>
          <Button onClick={handleUpdatePassword} variant="contained">
            {mutation.isLoading ? "Updating..." : "Update Password"}
          </Button>
        </FormControl>
      </form>
    </Stack>
  )
}
