import { useState } from "react"
import { Inter } from "next/font/google"
import { HeadMeta } from "@/components/meta/HeadMeta"
import { MainLayout } from "@/components/layouts/MainLayout"
import styles from "@/styles/Home.module.css"
import ButtonCategoryService from "@/components/ButtonCategoryService"
import FreelanceCard from "@/components/cards/FreelanceCard"
import { FreelanceProduct } from "@/types"
import { Person, PersonPinSharp } from "@mui/icons-material"
import {
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
import {
  useFetchCategoriesFreelanceOnline,
  useFetchCategoriesFreelanceOffline,
} from "../../hooks"
import ListSection from "@/components/shared/ListSection/ListSection"
import { useGetProducts } from "@/hooks/useProducts"
import pickBy from "lodash/pickBy"
import HomepageFilter from "@/components/dropdown/HomepageFilter"
import PostServiceButton from "@/components/buttons/PostServiceButton"

const inter = Inter({ subsets: ["latin"] })

export default function FreelanceOffline() {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"))

  const [type, setType] = useState("online")

  const [listCategoriesFreelanceOnline] = useFetchCategoriesFreelanceOnline()
  const [listCategoriesFreelanceOffline] = useFetchCategoriesFreelanceOffline()

  const [rating, setRating] = useState("")
  const [category, setCategory]: any = useState({})

  const { data: listProductsFreelance } = useGetProducts(
    type == "online" ? "freelance_online" : "freelance_offline",
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

  const handleSetType = (event: any) => {
    setRating("")
    setCategory({})
    setType(event.target.value)
  }

  return (
    <>
      <MainLayout>
        <HeadMeta />

        <main className={`${styles.main} ${inter.className}`}>
          <ButtonCategoryService />
          <section>
            <ListSection>
              <Grid container xs={12} alignItems="center">
                <Grid item xs={6}>
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

                    {!isMobileView && <PostServiceButton />}
                  </Box>
                </Grid>

                <Grid item container xs={6} justifyContent="flex-end">
                  <Grid item>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          value={type}
                          onChange={handleSetType}
                          displayEmpty
                          style={{
                            backgroundColor: "#090808",
                            borderRadius: "8px",
                            height: "32px",
                            marginTop: "10px",
                            fontSize: "16px",
                            color: "white",
                          }}
                          IconComponent={KeyboardArrowDown}
                        >
                          <MenuItem value="online">Online</MenuItem>
                          <MenuItem value="offline">Offline</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

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
                <Typography>
                  {type == "online" ? "Online" : "Offline"} Freelance
                </Typography>
              </Box>
              <ListSection.Categories
                listCategories={
                  type == "online"
                    ? listCategoriesFreelanceOnline
                    : listCategoriesFreelanceOffline
                }
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
                {listProductsFreelance?.map(
                  (item: FreelanceProduct, index: number) => (
                    <ListSection.Product key={index}>
                      <FreelanceCard item={item} />
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
