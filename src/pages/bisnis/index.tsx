import { useState } from "react"
import { Inter } from "next/font/google"
import { HeadMeta } from "@/components/meta/HeadMeta"
import { MainLayout } from "@/components/layouts/MainLayout"
import ButtonCategoryService from "@/components/ButtonCategoryService"
import RetailCard from "@/components/cards/RetailCard"
import styles from "@/styles/Home.module.css"
import { BisnisProduct } from "@/types"
import { Store } from "@mui/icons-material"
import { Typography, Box } from "@mui/material"
import { useFetchCategoriesBisnis } from "../../hooks"
import { useGetProducts } from "@/hooks/useProducts"
import HomepageFilter from "@/components/dropdown/HomepageFilter"
import { useMediaQuery, useTheme, Grid } from "@mui/material"
import pickBy from "lodash/pickBy"

import ListSection from "@/components/shared/ListSection/ListSection"

const inter = Inter({ subsets: ["latin"] })

export default function Bisnis() {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"))

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
      select: (data: any) => data?.data,
    }
  )

  const handleSetCategory = (newCategory: any) => {
    setRating("")
    setCategory(category?.id == newCategory?.id ? {} : newCategory)
  }

  const handleSetRating = (event: any) => {
    setCategory({})
    setRating(rating == event.target.value ? "" : event.target.value)
  }

  return (
    <>
      <MainLayout>
        <HeadMeta />

        <main className={`${styles.main} ${inter.className}`}>
          <ButtonCategoryService />
          <section>
            <ListSection>
              <ListSection.Header
                withHomepageFilter={!isMobileView}
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
              {isMobileView ? (
                <Grid item container xs={12} justifyContent="flex-end">
                  <Grid item>
                    <HomepageFilter
                      value={rating}
                      handleChange={handleSetRating}
                    />
                  </Grid>
                </Grid>
              ) : (
                <></>
              )}
              <ListSection.Products>
                {listProductsBisnis?.map(
                  (item: BisnisProduct, index: number) => (
                    <ListSection.Product key={index}>
                      <RetailCard item={item} />
                    </ListSection.Product>
                  )
                )}
              </ListSection.Products>
            </ListSection>
          </section>
        </main>
      </MainLayout>
    </>
  )
}
