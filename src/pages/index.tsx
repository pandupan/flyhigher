import styles from "@/styles/Home.module.css"
import { Inter } from "next/font/google"
import { HeadMeta } from "@/components/meta/HeadMeta"
import { MainLayout } from "@/components/layouts/MainLayout"
import BannerSlide from "@/components/BannerSlide"
import BannerPreview from "@/components/BannerPreview"
import { Container } from "@mui/material"
import { getSession } from "next-auth/react"
import { useState } from "react"
import Jastip from "@/components/pages/home/Jastip"
import Bisnis from "@/components/pages/home/Bisnis"
import Freelance from "@/components/pages/home/Freelance"
import ButtonCategoryService from "@/components/ButtonCategoryService"
import { getNotification } from "@/api-services/headerService"

const inter = Inter({ subsets: ["latin"] })

export default function Home({ user }: any) {
  const [showFullBanner, setShowFullBanner] = useState(false)

  return (
    <>
      <MainLayout user={user}>
        <HeadMeta />

        <main className={`${styles.main} ${inter.className}`}>
          {showFullBanner ? (
            <BannerPreview setBanner={setShowFullBanner} />
          ) : (
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "0",
              }}
            >
              <BannerSlide setBanner={setShowFullBanner} />
              <ButtonCategoryService />
              <Jastip />
              <Bisnis />
              <Freelance />
            </Container>
          )}
        </main>
      </MainLayout>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  return {
    props: {
      user: session ? session : null,
    },
  }
}
