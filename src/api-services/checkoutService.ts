import { postData } from "@/utils/fetch"

export const getCheckoutList = async (payload?: any) => {
  return await postData("/list_checkout_user", payload)
}
