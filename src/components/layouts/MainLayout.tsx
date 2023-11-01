import { ReactNode, useEffect, useState } from "react"
import { HeadMeta } from "../meta/HeadMeta"
import { Navbar } from "./Navbar"
import Footer from "./Footer"
import { getSession } from "next-auth/react"

export const MainLayout: React.FC<{ children?: ReactNode; user?: any }> = ({
  children,
  user,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    if (user?.user) {
      setIsLoggedIn(true)
      localStorage.setItem("token_higher", user.user.token)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <HeadMeta />
      <Navbar isLoggedIn={isLoggedIn} user={user} />

      {children}

      <Footer />
    </div>
  )
}
