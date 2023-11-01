"use client"

import { FreelanceProduct } from "@/types"
import { useState, useEffect } from "react"

export default function useFetchFreelanceOfflineProduct() {
  const baseUrl = "https://api.flyhigher.id"

  const [listProductFreelanceOffline, setListProductFreelanceOffline] =
    useState<FreelanceProduct[]>([])

  const _getListProductFreelanceOffline = async () => {
    const response = await fetch(`${baseUrl}/list_product_freelance_offline`)
    const { data } = await response.json()
    setListProductFreelanceOffline(data)
  }

  useEffect(() => {
    _getListProductFreelanceOffline()
  }, [])

  return [listProductFreelanceOffline]
}
