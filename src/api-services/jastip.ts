import { axiosInstance } from "@/utils/axiosInstance"

export const getCategoriesJastip = () => {
  return axiosInstance.get("/jastip_categories").then((res: any) => res.data)
}

export const getProductsJastip = () => {
  return axiosInstance.get("/list_product_jastip").then((res: any) => res.data)
}

export const getProductsJastipByCategory = (categoryId: string) => {
  return axiosInstance
    .get(`/list_product_categories_jastip/${categoryId}`)
    .then((res: any) => res.data)
}

export const getProductsJastipBest = () => {
  return axiosInstance
    .get("/product_the_best_jastip")
    .then((res: any) => res.data)
}

export const getProductsJastipNew = () => {
  return axiosInstance.get("/product_new_jastip").then((res: any) => res.data)
}

export const getProductsJastipSearch = (body: any) => {
  return axiosInstance
    .post("/search_jastip_by_date_country", body)
    .then((res: any) => res.data)
}
