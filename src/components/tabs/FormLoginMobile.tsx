import { LoginTypes } from "@/types/auth.types"
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const FormLoginMobile = () => {
  const [showPassword, setShowPassword] = useState(false)
  const formHook = useForm<LoginTypes>()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formHook

  const onSubmit = async (data: LoginTypes) => {
    await signIn("credentials", {
      callbackUrl: "/",
      email: data.email,
      password: data.password,
    })
  }

  return (
    <Box>
      <FormProvider {...formHook}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            className="input"
            sx={{ marginBottom: "10px", width: "80%" }}
          >
            <TextField
              placeholder="Email Address or Phone Number"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                color: "black",
              }}
              variant="outlined"
              {...register("email", { required: true })}
            />
          </FormControl>
          <FormControl
            className="input"
            sx={{ marginBottom: "10px", width: "80%" }}
          >
            <OutlinedInput
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <FaEye color="#000" />
                    ) : (
                      <FaEyeSlash color="#000" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
              {...register("password", { required: true })}
            />
          </FormControl>
          <Button
            type="submit"
            sx={{
              padding: "10px 0",
              margin: "20px 0",
              textTransform: "capitalize",
              width: "200px",
            }}
            variant="contained"
          >
            Login
          </Button>
        </form>
      </FormProvider>
    </Box>
  )
}

export default FormLoginMobile
