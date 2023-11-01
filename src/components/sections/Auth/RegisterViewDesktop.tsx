"use client"
import LoginSlider from "@/components/slider/LoginSlider"
import { RegisterTypes } from "@/types/auth.types"
import {
  Box,
  Button,
  Grid,
  InputBase,
  Snackbar,
  Typography,
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { authServices } from "@/api-services/authService"
import { useRouter } from "next/navigation"
import MuiAlert from "@mui/material/Alert"
import AuthProviders from "./AuthProviders"
import {
  getCsrfToken,
  getProviders,
  getSession,
  useSession,
} from "next-auth/react"

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const RegisterViewDesktop = () => {
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
            // severity="error"
            sx={{ width: "100%", backgroundColor: "#D32F2F", color: "white" }}
            onClose={() => setIsError(false)}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
      <Grid container>
        <Grid xs={7}>
          <Box maxWidth="100vw">
            <LoginSlider />
          </Box>
        </Grid>
        <Grid xs={5}>
          <Box
            height="100%"
            padding={4}
            sx={{
              display: "grid",
              placeContent: "center",
            }}
          >
            <Box textAlign="center" minWidth="400px">
              <Image src="/img/logo.png" width={100} height={100} alt="logo" />
              <Typography fontSize="26px" mt={2} mb={4}>
                Higher
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box textAlign="start" my={4}>
                  <h4>Sign Up</h4>
                  <Box marginBottom={2} sx={{ display: "flex" }}>
                    <InputBase
                      type="text"
                      sx={{
                        padding: "6px 12px",
                        width: "100%",
                        color: "white",
                        background: "#090909",
                        borderRadius: "20px",
                      }}
                      placeholder="First Name"
                      {...register("first_name", { required: true })}
                    />
                    <InputBase
                      type="text"
                      sx={{
                        padding: "6px 12px",
                        width: "100%",
                        color: "white",
                        background: "#090909",
                        borderRadius: "20px",
                      }}
                      placeholder="Last Name"
                      {...register("last_name", { required: true })}
                    />
                  </Box>
                  <Box marginBottom={2}>
                    <InputBase
                      type="email"
                      sx={{
                        padding: "6px 12px",
                        width: "100%",
                        color: "white",
                        background: "#090909",
                        borderRadius: "20px",
                      }}
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </Box>
                  <Box position="relative" marginBottom={2}>
                    <InputBase
                      type={showPassword ? "text" : "password"}
                      sx={{
                        padding: "6px 12px",
                        width: "100%",
                        color: "white",
                        background: "#090909",
                        borderRadius: "20px",
                      }}
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                    <Box
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{
                        position: "absolute",
                        bottom: "10px",
                        right: "20px",
                      }}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Box>
                  </Box>
                  <Box position="relative">
                    <InputBase
                      type={showPassword ? "text" : "password"}
                      sx={{
                        padding: "6px 12px",
                        width: "100%",
                        color: "white",
                        background: "#090909",
                        borderRadius: "20px",
                      }}
                      placeholder="Confirm password"
                      {...register("confirm_password", { required: true })}
                    />
                    <Box
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{
                        position: "absolute",
                        bottom: "10px",
                        right: "20px",
                      }}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Box>
                  </Box>
                </Box>

                <Button
                  type="submit"
                  style={{
                    borderRadius: "9999px",
                    color: "#242424",
                    textTransform: "capitalize",
                    width: "100%",
                    background: "#00DAC6",
                  }}
                >
                  Sign up Account
                </Button>
              </form>
              <AuthProviders />
              <Box>
                <p>
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    style={{ color: "#00DAC6", textDecoration: "none" }}
                  >
                    Sign In
                  </Link>
                </p>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default RegisterViewDesktop
