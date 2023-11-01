import { authServices } from "@/api-services/authService"
import LoginSlider from "@/components/slider/LoginSlider"
import { LoginTypes } from "@/types/auth.types"
import { Box, Button, Grid, InputBase, Typography } from "@mui/material"
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  useSession,
} from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useMutation } from "react-query"
import AuthProviders from "./AuthProviders"

const LoginViewDesktop = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>()

  const onSubmit = async (data: LoginTypes) => {
    await signIn("credentials", {
      callbackUrl: "/",
      email: data.email,
      password: data.password,
    })
  }

  return (
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
            <AuthProviders />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box textAlign="center" my={4}>
                <Typography mb={2}>Or Signin with</Typography>
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
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <Box
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{ position: "absolute", bottom: "10px", right: "20px" }}
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
                  backgroundColor: "#00DAC6",
                }}
              >
                Sign in Account
              </Button>
            </form>
            <Box>
              <p>
                Create an account?{" "}
                <Link
                  href="/register"
                  style={{ color: "#00DAC6", textDecoration: "none" }}
                >
                  Sign Up
                </Link>
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LoginViewDesktop
