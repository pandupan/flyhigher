import Image from "next/image"
import { Grid, Typography, useMediaQuery, useTheme, Box } from "@mui/material"

import { IListCategories } from "./interface"
import { JastipCategory, BisnisCategory, FreelanceCategory } from "@/types"

const CategoryMobile = ({
  listCategories,
  setSelectedCateogry,
}: IListCategories) => {
  return (
    <Grid container spacing="16px">
      {listCategories.map(
        (
          item: JastipCategory | BisnisCategory | FreelanceCategory,
          index: number
        ) => {
          return (
            <Grid
              key={index}
              item
              container
              lg={1.5}
              md={1.5}
              xs={3}
              sx={{ cursor: "pointer" }}
              justifyContent="center"
              alignItems="center"
              onClick={() => setSelectedCateogry && setSelectedCateogry(item)}
            >
              <Grid item xs={12}>
                <Image
                  src={item?.image_country}
                  alt={item?.value}
                  width={0}
                  height={0}
                  style={{
                    borderRadius: "6px",
                    cursor: "pointer",
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw"
                  loading="lazy"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  {item?.value}
                </Typography>
              </Grid>
            </Grid>
          )
        }
      )}
    </Grid>
  )
}

const CategoryDesktop = ({
  listCategories,
  setSelectedCateogry,
}: IListCategories) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {listCategories.map(
        (
          item: JastipCategory | BisnisCategory | FreelanceCategory,
          index: number
        ) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "10px",
                fontWeight: "600",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => setSelectedCateogry && setSelectedCateogry(item)}
            >
              <Image
                src={item?.image_country}
                alt={item?.value}
                style={{
                  borderRadius: "16px",
                  objectFit: "contain",
                }}
                width={30}
                height={30}
                loading="lazy"
              />
              <Typography>{item?.value}</Typography>
            </div>
          )
        }
      )}
    </Box>
  )
}

const ListCategories = ({
  listCategories,
  setSelectedCateogry,
}: IListCategories) => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <>
      {isMobileView && (
        <CategoryMobile
          listCategories={listCategories}
          setSelectedCateogry={setSelectedCateogry}
        />
      )}
      {!isMobileView && (
        <CategoryDesktop
          listCategories={listCategories}
          setSelectedCateogry={setSelectedCateogry}
        />
      )}
    </>
  )
}

export default ListCategories
