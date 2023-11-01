import { MainLayout } from "@/components/layouts/MainLayout"
import { HeadMeta } from "@/components/meta/HeadMeta"
import { ProfilePage } from "@/components/pages/ProfilePage"
import { Container } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect } from "react"

export async function getServerSideProps(context: any) {
  const { userId } = context.params
  return { props: { userId } }
}

export default function Page({ userId }: { userId: string }) {
  useEffect(() => {
    console.log("userId", userId)
  }, [userId])

  return (
    <MainLayout>
      <HeadMeta />
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <ProfilePage userId={userId as string} />
      </Container>
    </MainLayout>
  )
}
