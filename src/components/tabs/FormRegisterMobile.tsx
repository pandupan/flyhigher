import { authServices } from "@/api-services/authService"
import { RegisterTypes } from "@/types/auth.types"
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Snackbar,
  TextField,
} from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useMutation } from "react-query"

const FormRegisterMobile = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterTypes>()

  const { mutate } = useMutation(["login"], (credentials: RegisterTypes) =>
    authServices.registerUser(credentials)
  )
  const onSubmit = (data: RegisterTypes) => {
    if (data.password !== data.confirm_password) {
      alert("Password and confirm password does not match")
      return
    }

    mutate(
      {
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
      },
      {
        onSuccess: (res: any) => {
          setIsSuccess(true)
          setMessage(res.message)
          router.push("/login")
        },
        onError: (err: any) => {
          setMessage(err.response.data.message)
          setIsError(true)
        },
      }
    )
  }

  return (
    <>
      {isSuccess && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isSuccess}
          onClose={() => setIsSuccess(false)}
          key={"top" + "right"}
          autoHideDuration={5000}
        >
          <Alert
            severity="success"
            sx={{ width: "100%", backgroundColor: "#2e7d32", color: "white" }}
            onClose={() => setIsSuccess(false)}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
      {isError && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isError}
          onClose={() => setIsError(false)}
          key={"top" + "right"}
          autoHideDuration={5000}
        >
          <Alert
            severity="error"
            sx={{ width: "100%", backgroundColor: "#D32F2F", color: "white" }}
            onClose={() => setIsError(false)}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl
          className="input"
          sx={{ marginBottom: "10px", width: "80%" }}
        >
          <TextField
            id="login"
            type="text"
            placeholder="First Name"
            sx={{ backgroundColor: "white", borderRadius: "8px" }}
            {...register("first_name", { required: true })}
          />
        </FormControl>
        <FormControl
          className="input"
          sx={{ marginBottom: "10px", width: "80%" }}
        >
          <TextField
            id="login"
            type="text"
            placeholder="last Name"
            sx={{ backgroundColor: "white", borderRadius: "8px" }}
            {...register("last_name", { required: true })}
          />
        </FormControl>
        <FormControl
          className="input"
          sx={{ marginBottom: "10px", width: "80%" }}
        >
          <TextField
            id="login"
            type="email"
            placeholder="Email Address or Phone Number"
            sx={{ backgroundColor: "white", borderRadius: "8px" }}
            {...register("email", { required: true })}
          />
        </FormControl>
        <FormControl
          className="input"
          sx={{ marginBottom: "10px", width: "80%" }}
        >
          <OutlinedInput
            placeholder="Password"
            id="outlined-adornment-password"
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
        <FormControl
          className="input"
          sx={{ marginBottom: "10px", width: "80%" }}
        >
          <OutlinedInput
            placeholder="Confirm Password"
            id="outlined-adornment-password"
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
            {...register("confirm_password", { required: true })}
          />
        </FormControl>
        <Button
          type="submit"
          style={{
            padding: "10px 0",
            margin: "20px 0",
            textTransform: "capitalize",
            width: "200px",
          }}
          variant="contained"
        >
          Create Account
        </Button>
      </Box>
    </>
  )
}

export default FormRegisterMobile
