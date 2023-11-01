import { axiosInstance } from "@/utils/axiosInstance"

export const getDetailProduct = (data: any) => {
  return axiosInstance.post(`/detail_product`, data).then((res) => res.data)
}
export const getDetailEditProduct = (data: any) => {
  return axiosInstance.post(`/view_edit_detail_product`, data).then((res) => res.data)
}

export const addProductToCart = (data: any) => {
  return axiosInstance.post(`/add_cart_product`, data).then((resp) => resp.data)
}
