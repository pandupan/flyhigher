"use client"

interface Category {
  id: number
  value: string
  image_country: string
}

import { useState, useEffect } from "react"

export default function useFetchJastipCategories() {
  const baseUrl = "https://api.flyhigher.id"

  const [listCategoriesJastip, setListCategoriesJastip] = useState<Category[]>(
    []
  )

  const _getListCategoriesJastip = async () => {
    const response = await fetch(`${baseUrl}/jastip_categories`)
    const { data } = await response.json()
    setListCategoriesJastip(data)
  }

  useEffect(() => {
    _getListCategoriesJastip()
  }, [])

  return [listCategoriesJastip]
}
