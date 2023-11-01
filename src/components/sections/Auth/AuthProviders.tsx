"use client"
import { Box, Typography } from "@mui/material"
import { getProviders, signIn } from "next-auth/react"
import { useRouter } from "next/router"
import React, { ReactNode, useEffect, useState } from "react"
import { IoLogoApple, IoLogoFacebook, IoLogoGoogle } from "react-icons/io"

const logos = [
  {
    id: 1,
    name: "Apple",
    logo: (
      <IoLogoApple
        onClick={() => signIn("apple", { callbackUrl: "/" })}
        size={30}
        cursor={"pointer"}
      />
    ),
  },
  {
    id: 2,
    name: "Facebook",
    logo: (
      <IoLogoFacebook
        onClick={() => signIn("facebook", { callbackUrl: "/" })}
        size={30}
        cursor={"pointer"}
      />
    ),
  },
  {
    id: 3,
    name: "Google",
    logo: (
      <IoLogoGoogle
        onClick={() => signIn("google", { callbackUrl: "/" })}
        size={30}
        cursor={"pointer"}
      />
    ),
  },
]

const AuthProviders = () => {
  const [providers, setProviders] = useState<any>({})
  const router = useRouter()
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    fetchProviders()
  }, [])

  return (
    <Box marginY={2}>
      <Typography>
        {router.pathname === "/login" ? "Use" : "Or use "} a social media
        account to login
      </Typography>
      <Box
        sx={{ display: "flex", gap: 10, justifyContent: "center" }}
        marginY={2}
      >
        {(Object.values(providers) || []).map(
          (provider: any, index: number) => (
            <React.Fragment key={index}>
              {logos.map(
                (logo: { id: number; name: string; logo: ReactNode }) => (
                  <React.Fragment key={logo.id}>
                    {logo.name === provider.name && logo.logo}
                  </React.Fragment>
                )
              )}
            </React.Fragment>
          )
        )}
      </Box>
    </Box>
  )
}

export default AuthProviders
