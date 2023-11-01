"use client"

interface Category {
  id: number
  value: string
  image_country: string
}

import { useState, useEffect } from "react"

export default function useFetchCategoriesFreelanceOnline() {
  const baseUrl = "https://api.flyhigher.id"

  const [listCategoriesFreelanceOnline, setListCategoriesFreelanceOnline] =
    useState<Category[]>([])

  const _getListCategoriesFreelanceOnline = async () => {
    const response = await fetch(`${baseUrl}/freelance_online_categories`)
    const { data } = await response.json()
    setListCategoriesFreelanceOnline(data)
  }

  useEffect(() => {
    _getListCategoriesFreelanceOnline()
  }, [])

  return [listCategoriesFreelanceOnline]
}
