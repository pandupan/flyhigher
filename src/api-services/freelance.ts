import { axiosInstance } from "@/utils/axiosInstance"

export const getCategoriesFreelanceOnline = () => {
  return axiosInstance
    .get("/freelance_online_categories")
    .then((res: any) => res.data)
}

export const getProductsFreelanceOnline = () => {
  return axiosInstance
    .get("/list_product_freelance_online")
    .then((res: any) => res.data)
}

export const getProductsFreelanceOnlineByCategory = (categoryId: string) => {
  return axiosInstance
    .get(`/list_product_categories_freelance/${categoryId}`)
    .then((res: any) => res.data)
}

export const getProductsFreelanceOnlineBest = () => {
  return axiosInstance
    .get("/product_the_best_freelance_online")
    .then((res: any) => res.data)
}

export const getProductsFreelanceOnlineNew = () => {
  return axiosInstance
    .get("/product_new_freelance_online")
    .then((res: any) => res.data)
}

export const getProductsFreelanceOnlineSearch = (body: any) => {
  return axiosInstance
    .post("/search_freelance_online_by_date_country", body)
    .then((res: any) => res.data)
}

export const getCategoriesFreelanceOffline = () => {
  return axiosInstance
    .get("/freelance_offline_categories")
    .then((res: any) => res.data)
}

export const getProductsFreelanceOffline = () => {
  return axiosInstance
    .get("/list_product_freelance_offline")
    .then((res: any) => res.data)
}

export const getProductsFreelanceOfflineByCategory = (categoryId: string) => {
  return axiosInstance
    .get(`/list_product_categories_freelance/${categoryId}`)
    .then((res: any) => res.data)
}

export const getProductsFreelanceOfflineBest = () => {
  return axiosInstance
    .get("/product_the_best_freelance_offline")
    .then((res: any) => res.data)
}

export const getProductsFreelanceOfflineNew = () => {
  return axiosInstance
    .get("/product_new_freelance_offline")
    .then((res: any) => res.data)
}

export const getProductsFreelanceOfflineSearch = (body: any) => {
  return axiosInstance
    .post("/search_freelance_offline_by_date_country", body)
    .then((res: any) => res.data)
}
