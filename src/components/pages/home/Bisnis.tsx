import { useState } from "react"

import ListSection from "@/components/shared/ListSection/ListSection"
import { RetailCard } from "@/components/cards"
import { Typography, Box } from "@mui/material"
import { Store } from "@mui/icons-material"
import { useFetchCategoriesBisnis } from "@/hooks"
import { useGetProducts } from "@/hooks/useProducts"
import { BisnisProduct } from "@/types"
import pickBy from "lodash/pickBy"

const Bisnis = () => {
  const [listCategoriesBisnis] = useFetchCategoriesBisnis()

  const [rating, setRating] = useState("")
  const [category, setCategory]: any = useState({})

  const { data: listProductsBisnis } = useGetProducts(
    "bisnis",
    pickBy(
      {
        categoryId: category?.id,
        rating,
      },
      (value) => !!value
    ) || {},
    {
      select: (data: any) => data?.data?.slice(0, 4),
    }
  )

  const handleSetCategory = (newCategory: any) => {
    setCategory(category?.id == newCategory?.id ? {} : newCategory)
  }

  const handleSetRating = (event: any) => {
    setCategory({})
    setRating(rating == event.target.value ? "" : event.target.value)
  }
  return (
    <ListSection>
      <ListSection.Header
        withHomepageFilter
        rating={rating}
        handleSetRating={handleSetRating}
      >
        <Box
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <Store
            sx={{
              height: "32px",
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Retail
          </Typography>
        </Box>
      </ListSection.Header>
      <ListSection.Categories
        listCategories={listCategoriesBisnis}
        setSelectedCateogry={handleSetCategory}
      />
      <ListSection.Products>
        {listProductsBisnis?.map((item: BisnisProduct, index: number) => (
          <ListSection.Product key={index}>
            <RetailCard item={item} />
          </ListSection.Product>
        ))}
      </ListSection.Products>
      <ListSection.ShowMore link="/bisnis" />
    </ListSection>
  )
}

export default Bisnis
