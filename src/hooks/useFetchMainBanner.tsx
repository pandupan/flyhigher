"use client"

interface Banner {
  image_main_banner: string
}

import { useState, useEffect } from "react"

export default function useFetchMainBanner() {
  const baseUrl = "https://api.flyhigher.id"

  const [listMainBanner, setListMainBanner] = useState<Banner[]>([])

  const _getMainBanner = async () => {
    const response = await fetch(`${baseUrl}/main_banner`)
    const { data } = await response.json()
    setListMainBanner(data)
  }

  useEffect(() => {
    _getMainBanner()
  }, [])

  return [listMainBanner]
}
