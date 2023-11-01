"use client"

import { FreelanceProduct } from "@/types"
import { useState, useEffect } from "react"

export default function useFetchFreelanceOnlineProduct() {
  const baseUrl = "https://api.flyhigher.id"

  const [listProductFreelanceOnline, setListProductFreelanceOnline] = useState<
    FreelanceProduct[]
  >([])

  const _getListProductFreelanceOnline = async () => {
    const response = await fetch(`${baseUrl}/list_product_freelance_online`)
    const { data } = await response.json()
    setListProductFreelanceOnline(data)
  }

  useEffect(() => {
    _getListProductFreelanceOnline()
  }, [])

  return [listProductFreelanceOnline]
}
