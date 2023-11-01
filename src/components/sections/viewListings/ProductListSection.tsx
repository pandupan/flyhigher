import { ProductCard } from "@/components/cards/ProductCard"
import { Box, Stack } from "@mui/material"
import { BsTools } from "react-icons/bs"

export const ProductListSection = () => {
  return (
    <Stack spacing={1}>
      <Box sx={{ width: '100%' }} >
        <Stack spacing={2} direction={'row'} alignItems={'center'}>
          <BsTools />
          <h3>
            Product List
          </h3>
        </Stack>
      </Box>
      <Box sx={{ width: '100%', overflow: 'auto' }} >
        <Stack spacing={4} direction={'row'} sx={{ padding: '30px 0' }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Stack>
      </Box>
    </Stack>
  )
}