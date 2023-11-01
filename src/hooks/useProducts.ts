import { UseQueryOptions, useQuery, useMutation } from "react-query"

import isEmpty from "lodash/isEmpty"

import {
  getProductsJastip,
  getProductsJastipByCategory,
  getProductsJastipBest,
  getProductsJastipNew,
  getProductsJastipSearch,
} from "@/api-services/jastip"
import {
  getProductsBisnis,
  getProductsBisnisByCategory,
  getProductsBisnisBest,
  getProductsBisnisNew,
  getProductsBisnisSearch,
} from "@/api-services/bisnis"
import {
  getProductsFreelanceOnline,
  getProductsFreelanceOffline,
  getProductsFreelanceOnlineByCategory,
  getProductsFreelanceOfflineByCategory,
  getProductsFreelanceOnlineBest,
  getProductsFreelanceOfflineBest,
  getProductsFreelanceOnlineNew,
  getProductsFreelanceOfflineNew,
  getProductsFreelanceOnlineSearch,
  getProductsFreelanceOfflineSearch,
} from "@/api-services/freelance"

export const useGetProducts = (
  type: "jastip" | "bisnis" | "freelance_online" | "freelance_offline",
  params?: any,
  options?: UseQueryOptions
) => {
  const fetch = {
    jastip: getProductsJastip,
    bisnis: getProductsBisnis,
    freelance_online: getProductsFreelanceOnline,
    freelance_offline: getProductsFreelanceOffline,
  }

  const fetchByCategory = {
    jastip: getProductsJastipByCategory,
    bisnis: getProductsBisnisByCategory,
    freelance_online: getProductsFreelanceOnlineByCategory,
    freelance_offline: getProductsFreelanceOfflineByCategory,
  }

  const fetchRating = {
    jastip:
      params?.rating == "best" ? getProductsJastipBest : getProductsJastipNew,
    bisnis:
      params?.rating == "best" ? getProductsBisnisBest : getProductsBisnisNew,
    freelance_online:
      params?.rating == "best"
        ? getProductsFreelanceOnlineBest
        : getProductsFreelanceOnlineNew,
    freelance_offline:
      params?.rating == "best"
        ? getProductsFreelanceOfflineBest
        : getProductsFreelanceOfflineNew,
  }

  const fetchSearch = {
    jastip: getProductsJastipSearch,
    bisnis: getProductsBisnisSearch,
    freelance_online: getProductsFreelanceOnlineSearch,
    freelance_offline: getProductsFreelanceOfflineSearch,
  }

  const fetchData = () => {
    const { categoryId, rating, from_country, to_country, from_date, to_date } =
      params || {}
    let getData = () => {}

    if (isEmpty(params)) {
      getData = fetch[type]
    } else if (categoryId) {
      getData = () => fetchByCategory[type](categoryId)
    } else if (rating) {
      getData = fetchRating[type]
    } else if (from_country || to_country || from_date || to_date) {
      getData = () => fetchSearch[type]({ ...params })
    }

    return getData()
  }

  return useQuery<any>([type, params], fetchData, options)
}
