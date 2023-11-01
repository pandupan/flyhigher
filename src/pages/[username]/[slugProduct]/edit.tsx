import { getDetailEditProduct } from "@/api-services/productService"
import { EditListingForm } from "@/components/editListing/EditListingForm"
import { MainLayout } from "@/components/layouts/MainLayout"
import { Container } from "@mui/material"
import { useQuery } from "react-query"

export async function getServerSideProps(context: any) {
  const { username, slugProduct } = context.params
  // const data = await getDetailProduct({
  //   username: username,
  //   slug_product: slugProduct,
  // })
  return { props: { username, slugProduct } }
}

export default function EditProductRoute({
  username,
  slugProduct,
}: // data,
{
  username: string
  slugProduct: string
  // data: any
}) {
  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: [`productDetail${username}${slugProduct}`],
  //   queryFn: () =>
  //     getDetailEditProduct({ username: username, slug_product: slugProduct }),
  //   cacheTime: 0,
  // })

  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <EditListingForm slugProduct={slugProduct} username={username} />
      </Container>
    </MainLayout>
  )
}
