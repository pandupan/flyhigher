import { Grid } from "@mui/material"
import { IListProducts } from "./interface"

const ListProductsContent = ({ children }: IListProducts) => {
  return (
    <Grid item lg={3} md={6} xs={6}>
      {children}
    </Grid>
  )
}

const ListProducts = ({ children }: IListProducts) => {
  return (
    <Grid container spacing="16px">
      {children}
    </Grid>
  )
}

ListProducts.Content = ListProductsContent

export default ListProducts
