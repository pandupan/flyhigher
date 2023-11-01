"use client"

interface Banner {
  id: number
  image_main_banner: string
}

import { useState, useEffect } from "react"

export default function useFetchBanner() {
  const baseUrl = "https://api.flyhigher.id"

  const [banners, setBanners] = useState<Banner[]>([])

  const _getBanner = async () => {
    const response = await fetch(`${baseUrl}/main_banner`)
    const { data } = await response.json()
    setBanners(data)
  }

  useEffect(() => {
    _getBanner()
  }, [])

  return [banners]
}
