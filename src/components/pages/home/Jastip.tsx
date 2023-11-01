import { useState } from "react"

import ListSection from "@/components/shared/ListSection/ListSection"
import { JastipCard } from "@/components/cards"
import { Typography, Box } from "@mui/material"
import { FlightTakeoff } from "@mui/icons-material"
import { useFetchJastipCategories } from "@/hooks"
import { JastipProduct } from "@/types"
import { useGetProducts } from "@/hooks/useProducts"
import pickBy from "lodash/pickBy"

const Jastip = () => {
  const [listCategoriesJastip] = useFetchJastipCategories()

  const [rating, setRating] = useState("")
  const [category, setCategory]: any = useState({})

  const { data: listProductsJastip } = useGetProducts(
    "jastip",
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
          }}
        >
          <FlightTakeoff
            sx={{
              height: "32px",
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Jastip
          </Typography>
        </Box>
      </ListSection.Header>
      <ListSection.Categories
        listCategories={listCategoriesJastip}
        setSelectedCateogry={handleSetCategory}
      />
      <ListSection.Products>
        {listProductsJastip?.map((item: JastipProduct, index: number) => (
          <ListSection.Product key={index}>
            <JastipCard item={item} />
          </ListSection.Product>
        ))}
      </ListSection.Products>
      <ListSection.ShowMore link="/jastip" />
    </ListSection>
  )
}

export default Jastip
