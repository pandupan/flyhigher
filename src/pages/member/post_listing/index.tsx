import { GetServerSidePropsResult } from "next"
import { styled } from "@mui/material/styles"
import { Box, Container } from "@mui/material"

import { MainLayout } from "@/components/layouts/MainLayout"
// import HigherTheme from "@/components/HigherTheme"
import { PostListingForm } from "@/components/postListing/PostListingForm"

type PostListingProps = {}

export function getServerSideProps(): GetServerSidePropsResult<PostListingProps> {
  return {
    props: {},
  }
}

export default function PostListing() {
  return (
    // <HigherTheme>
    <MainLayout>
      <MainContent>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <PostListingForm />
        </Container>
      </MainContent>
    </MainLayout>
    // </HigherTheme>
  )
}

const MainContent = styled(Box)(({ theme }) => ({
  "--header-margin": "100px",
  minHeight: "calc(100vh - var(--header-margin) - 52px)",
  backgroundColor: "rgba(0, 0, 0, 1)",
  color: "rgba(255, 255, 255, 1)",
  fontSize: "0.875rem",
  fontFamily: theme.typography.fontFamily,
}))
