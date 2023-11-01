import { Button, FormControl, Grid, Stack, TextField } from "@mui/material"

type updateProfileFormProps = {
  onSubmit: any
  firstName: string
  lastName: string
  detail: string
  isLoading: boolean
  setFirstName: React.Dispatch<React.SetStateAction<string>>
  setLastName: React.Dispatch<React.SetStateAction<string>>
  setDetail: React.Dispatch<React.SetStateAction<string>>
}

export const UpdateProfileForm: React.FC<updateProfileFormProps> = ({
  onSubmit,
  firstName,
  lastName,
  detail,
  setFirstName,
  setLastName,
  setDetail,
  isLoading,
}) => {
  return (
    <Stack>
      <Grid container spacing={2} gap={0}>
        <Grid item xs={12} md={6}>
          <FormControl
            fullWidth
            sx={{
              py: 1,
            }}
          >
            <TextField
              required
              id="firstName"
              label="First Name"
              variant="outlined"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e?.target?.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            fullWidth
            sx={{
              py: 1,
            }}
          >
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e?.target?.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ py: 1 }}>
            <TextField
              id="detail"
              label="About Me"
              variant="outlined"
              placeholder="About Me"
              value={detail}
              multiline
              onChange={(e) => setDetail(e?.target?.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} textAlign={"end"}>
          <FormControl sx={{ py: 1 }}>
            <Button onClick={onSubmit} variant="contained">
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Stack>
  )
}
