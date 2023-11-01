import { axiosInstance } from "@/utils/axiosInstance"

export const getProfile = async (tokenUser: string) => {
  return axiosInstance(`/profil/${tokenUser}`).then((res) => res.data)
}

export const updateProfile = (data: any) => {
  return axiosInstance.post(`/edit_profil`, data).then((resp) => resp.data)
}

export const updatePassword = (data: any) => {
  return axiosInstance.post(`/edit_password`, data).then((resp) => resp.data)
}
