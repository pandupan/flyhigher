import { axiosInstance } from "@/utils/axiosInstance"

export const getCategoriesBisnis = () => {
  return axiosInstance.get("/bisnis_categories").then((res: any) => res.data)
}

export const getProductsBisnis = () => {
  return axiosInstance.get("/list_product_bisnis").then((res: any) => res.data)
}

export const getProductsBisnisByCategory = (categoryId: string) => {
  return axiosInstance
    .get(`/list_product_categories_bisnis/${categoryId}`)
    .then((res: any) => res.data)
}

export const getProductsBisnisBest = () => {
  return axiosInstance
    .get("/product_the_best_bisnis")
    .then((res: any) => res.data)
}

export const getProductsBisnisNew = () => {
  return axiosInstance.get("/product_new_bisnis").then((res: any) => res.data)
}

export const getProductsBisnisSearch = (body: any) => {
  return axiosInstance
    .post("/search_bisnis_by_date_country", body)
    .then((res: any) => res.data)
}
