"use client"

import { Box, Button, Stack } from "@mui/material"
import { BsPlus, BsTools } from "react-icons/bs"
import { ServiceFormCard } from "../cards/ServiceFormCard"

type productListFormSectionProp = {
  onAddProduct: any
  onChangeProduct: any
  onRemoveProduct: any
  titles: string[]
  images: File[]
  prices: number[]
  amounts: number[]
}

export const ProductListFormSection: React.FC<productListFormSectionProp> = ({
  onAddProduct,
  onChangeProduct,
  onRemoveProduct,
  titles = [],
  images = [],
  prices = [],
  amounts = [],
}) => {
  return (
    <Stack spacing={1}>
      <Box sx={{ width: "100%" }}>
        <Stack
          spacing={2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <BsTools />
            <h3>Product List</h3>
          </Stack>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BsPlus />}
            onClick={onAddProduct}
          >
            Add Product
          </Button>
        </Stack>
      </Box>
      <Box sx={{ width: "100%", overflow: "auto" }}>
        <Stack spacing={4} direction={"row"} sx={{ padding: "30px 0" }}>
          {titles?.map((title, idx) => (
            <ServiceFormCard
              key={idx}
              index={idx}
              title={title}
              image={images[idx]}
              price={prices[idx]}
              amount={amounts[idx]}
              onRemove={() => onRemoveProduct(idx)}
              onChangeService={onChangeProduct}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}
