import { axiosInstance } from "@/utils/axiosInstance"

export const getLocationJastip = () => {
  return axiosInstance.get(`/jastip_categories`).then((res) => res.data)
}

export const getLocationBisnis = () => {
  return axiosInstance.get(`/get_city`).then((res) => res.data)
}

export const postListingFreelance = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/post_listing_freelance/${tokenUser}`, data)
    .then((res) => res.data)
}

export const postListingJastip = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/post_listing_jastip/${tokenUser}`, data)
    .then((resp) => resp.data)
}

export const postListingBisnis = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/post_listing_bisnis/${tokenUser}`, data)
    .then((resp) => resp.data)
}

export const updateListingFreelance = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/edit_listing_freelance/${tokenUser}`, data)
    .then((res) => res.data)
}

export const updateListingJastip = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/edit_listing_jastip/${tokenUser}`, data)
    .then((resp) => resp.data)
}

export const updateListingBisnis = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/edit_listing_bisnis/${tokenUser}`, data)
    .then((resp) => resp.data)
}

export const deleteSubProductJastip = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/delete_sub_product_jastip/${tokenUser}`, data)
    .then((resp) => resp.data)
}
export const deleteSubProductFreelance = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/delete_sub_product_freelance/${tokenUser}`, data)
    .then((resp) => resp.data)
}
export const deleteSubProductBisnis = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/delete_sub_product_bisnis/${tokenUser}`, data)
    .then((resp) => resp.data)
}

export const updateSubProductJastip = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/update_sub_product_jastip/${tokenUser}`, data)
    .then((resp) => resp.data)
}

export const updateSubProductFreelance = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/update_sub_product_freelance/${tokenUser}`, data)
    .then((resp) => resp.data)
}
export const updateSubProductBisnis = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/update_sub_product_bisnis/${tokenUser}`, data)
    .then((resp) => resp.data)
}

export const addSubProductJastip = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/add_sub_product_jastip/${tokenUser}`, data)
    .then((resp) => resp.data)
}

export const addSubProductFreelance = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/add_sub_product_freelance/${tokenUser}`, data)
    .then((resp) => resp.data)
}
export const addSubProductBisnis = (tokenUser: string, data: any) => {
  return axiosInstance
    .post(`/add_sub_product_bisnis/${tokenUser}`, data)
    .then((resp) => resp.data)
}
