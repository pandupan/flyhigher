import { MainLayout } from "@/components/layouts/MainLayout"
import { styled } from "@mui/material/styles"
import { Box, Container, Typography } from "@mui/material"
import React from "react"
import { getSession } from "next-auth/react"
import PageTitle from "@/components/dashboard/PageTitle"
import { ShoppingBag } from "@mui/icons-material"
import TableCart from "@/components/member/cart/Table"
import Image from "next/image"

const dummyData = [
  {
    id: 1,
    productImage: "/logoHigher.png",
    product_name: "Testing",
    price: "Rp.50.000",
    total: "Rp.50.000",
  },
]

const Cart = ({ user }: any) => {
  return (
    <MainLayout user={user}>
      <MainContent>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <PageTitle icon={<ShoppingBag />} title="Cart" />
          <Box
            sx={{ display: "flex", gap: 2, alignItems: "center" }}
            marginY={4}
          >
            <Typography>Seller:</Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Image
                src={"/logoHigher.png"}
                alt="pictures"
                width={40}
                height={40}
              />
              <Typography sx={{ color: "#3dd2c0", fontSize: 16 }}>
                Zuanda Baransyah Putra
              </Typography>
            </Box>
          </Box>
          <TableCart data={dummyData} />
        </Container>
      </MainContent>
    </MainLayout>
  )
}

export default Cart

const MainContent = styled(Box)(({ theme }) => ({
  "--header-margin": "100px",
  minHeight: "calc(100vh - var(--header-margin) - 52px)",
  backgroundColor: "rgba(0, 0, 0, 1)",
  color: "rgba(255, 255, 255, 1)",
  fontSize: "0.875rem",
  fontFamily: theme.typography.fontFamily,
}))

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  return {
    props: {
      user: session ? session : null,
    },
  }
}
