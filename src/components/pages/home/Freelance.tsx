import React from "react"

import ListSection from "@/components/shared/ListSection/ListSection"
import { FreelanceCard } from "@/components/cards"
import { Typography, Box } from "@mui/material"
import { Person, PersonPinSharp } from "@mui/icons-material"
import { useGetProducts } from "@/hooks/useProducts"
import { FreelanceProduct } from "@/types"

const Freelance = () => {
  const { data: listProductsFreelanceOnline } = useGetProducts(
    "freelance_online",
    {},
    {
      select: (data: any) => data?.data?.slice(0, 2),
    }
  )

  const { data: listProductsFreelanceOffline } = useGetProducts(
    "freelance_offline",
    {},
    {
      select: (data: any) => data?.data?.slice(0, 2),
    }
  )

  return (
    <ListSection>
      <ListSection.Header>
        <Box
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <Person
            sx={{
              height: "32px",
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Freelance
          </Typography>
        </Box>
      </ListSection.Header>

      {/* Freelance Online */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          margin: "16px 0 32px 0",
        }}
      >
        <PersonPinSharp
          sx={{
            height: "32px",
          }}
        />
        <Typography>Online Freelance</Typography>
      </Box>
      <ListSection.Products>
        {listProductsFreelanceOnline?.map(
          (item: FreelanceProduct, index: number) => (
            <ListSection.Product key={index}>
              <FreelanceCard item={item} />
            </ListSection.Product>
          )
        )}
      </ListSection.Products>
      <ListSection.ShowMore link="/freelance" />

      {/* Freelance Offline */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          margin: "16px 0 32px 0",
        }}
      >
        <PersonPinSharp
          sx={{
            height: "32px",
          }}
        />
        <Typography>Offline Freelance</Typography>
      </Box>
      <ListSection.Products>
        {listProductsFreelanceOffline?.map(
          (item: FreelanceProduct, index: number) => (
            <ListSection.Product key={index}>
              <FreelanceCard item={item} />
            </ListSection.Product>
          )
        )}
      </ListSection.Products>
      <ListSection.ShowMore link="/freelance" />
    </ListSection>
  )
}

export default Freelance
