import { getData, postData } from "@/utils/fetch"

export const getNotification = async (params?: any) => {
  return await getData("/notification", params)
}

export const getMessage = async (params?: any) => {
  return await getData("/message", params)
}

export const getCart = async (params?: any) => {
  return await getData("/cart", params)
}

export const deleteCart = async (url: string, payload?: any) => {
  return await postData(`/cart/${url}`, payload)
}
