"use client"

import { JastipProduct } from "@/types"
import { useState, useEffect } from "react"

export default function useFetchJastipProduct() {
  const baseUrl = "https://api.flyhigher.id"

  const [listProductJastip, setListProductJastip] = useState<JastipProduct[]>(
    []
  )

  const _getListProductJastip = async () => {
    const response = await fetch(`${baseUrl}/list_product_jastip`)
    const { data } = await response.json()
    setListProductJastip(data)
  }

  useEffect(() => {
    _getListProductJastip()
  }, [])

  return [listProductJastip]
}
