import { axiosInstance } from "./axiosInstance"
import errorHandler from "./handleError"

export async function getData(url: string, params?: any) {
  try {
    const accessToken = localStorage.getItem("token_higher")
      ? localStorage.getItem("token_higher")
      : ""
    return await axiosInstance.get(`${url}/${accessToken}`, {
      params,
    })
  } catch (err) {
    return errorHandler(err)
  }
}

export async function getDataServerSide(url: string, params?: any) {
  try {
    return await axiosInstance.get(`${url}`, {
      params,
    })
  } catch (err) {
    return errorHandler(err)
  }
}

export async function postData(url: string, payload?: any, formData?: boolean) {
  try {
    const accessToken = localStorage.getItem("token_higher")
      ? localStorage.getItem("token_higher")
      : ""

    return await axiosInstance.post(
      `${url}`,
      { ...payload, api_key: accessToken },
      {
        headers: {
          "Content-Type": formData ? "multipart/form-data" : "application/json",
        },
      }
    )
  } catch (err) {
    return errorHandler(err, "/login")
  }
}
