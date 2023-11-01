"use client"

import { BisnisProduct } from "@/types"
import { useState, useEffect } from "react"

export default function useFetchBisnisProduct() {
  const baseUrl = "https://api.flyhigher.id"

  const [listProductBisnis, setListProductBisnis] = useState<BisnisProduct[]>(
    []
  )

  const _getListProductBisnis = async () => {
    const response = await fetch(`${baseUrl}/list_product_bisnis`)
    const { data } = await response.json()
    setListProductBisnis(data)
  }

  useEffect(() => {
    _getListProductBisnis()
  }, [])

  return [listProductBisnis]
}
