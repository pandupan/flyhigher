import { FormControl, Stack, TextField, Typography } from "@mui/material"

type updateEmailPhoneFormProps = {
  email: string
  phone: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPhone: React.Dispatch<React.SetStateAction<string>>
}

export const UpdateEmailPhoneForm: React.FC<updateEmailPhoneFormProps> = ({
  email,
  phone,
  setEmail,
  setPhone,
}) => {
  return (
    <Stack>
      <form>
        <Typography color={"primary"} sx={{ p: 1 }}>
          Verified Info
        </Typography>
        <FormControl fullWidth sx={{ p: 1 }}>
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e?.target?.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ p: 1 }}>
          <TextField
            id="phone"
            label="Phone Number"
            variant="outlined"
            type="tel"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e?.target?.value)}
          />
        </FormControl>
      </form>
    </Stack>
  )
}
