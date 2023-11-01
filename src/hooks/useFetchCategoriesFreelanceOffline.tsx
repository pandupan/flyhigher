"use client"

interface Category {
  id: number
  value: string
  image_country: string
}

import { useState, useEffect } from "react"

export default function useFetchCategoriesFreelanceOffline() {
  const baseUrl = "https://api.flyhigher.id"

  const [listCategoriesFreelanceOffline, setListCategoriesFreelanceOffline] =
    useState<Category[]>([])

  const _getListCategoriesFreelanceOffline = async () => {
    const response = await fetch(`${baseUrl}/freelance_offline_categories`)
    const { data } = await response.json()
    setListCategoriesFreelanceOffline(data)
  }

  useEffect(() => {
    _getListCategoriesFreelanceOffline()
  }, [])

  return [listCategoriesFreelanceOffline]
}
