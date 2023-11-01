"use client"

interface Category {
  id: number
  value: string
  image_country: string
}

import { useState, useEffect } from "react"

export default function useFetchCategoriesBisnis() {
  const baseUrl = "https://api.flyhigher.id"

  const [listCategoriesBisnis, setListCategoriesBisnis] = useState<Category[]>(
    []
  )
  const _getListCategoriesBisnis = async () => {
    const response = await fetch(`${baseUrl}/bisnis_categories`)
    const { data } = await response.json()
    setListCategoriesBisnis(data)
  }

  useEffect(() => {
    _getListCategoriesBisnis()
  }, [])

  return [listCategoriesBisnis]
}
