import { LoginTypes } from "@/types/auth.types"
import { axiosInstance } from "@/utils/axiosInstance"

const loginUser = (credentials: LoginTypes) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosInstance.post("/login", credentials)
      if (res) {
        resolve(res.data)
      }
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
}

const registerUser = (credentials: LoginTypes) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosInstance.post("/register", credentials)
      if (res) {
        resolve(res.data)
      }
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
}

export const authServices = {
  loginUser,
  registerUser,
}
