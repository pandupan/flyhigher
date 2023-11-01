import { Container } from "@mui/material"
import ShowMoreButton from "@/components/buttons/ShowMoreButton"

import ListHeader from "./ListHeader"
import ListCategories from "./ListCategories"
import ListProducts from "./ListProducts"

import { IListSection } from "./interface"

const ListSection = ({ children }: IListSection) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0",
        gap: "24px",
      }}
    >
      {children}
    </Container>
  )
}

ListSection.Header = ListHeader
ListSection.Categories = ListCategories
ListSection.Products = ListProducts
ListSection.Product = ListProducts.Content
ListSection.ShowMore = ShowMoreButton

export default ListSection
