export enum EnumProductType {
    PRODUCT = 'product',
    SERVICE = 'service'
}

export enum ServiceType {
    FREELANCE = 'FREELANCE',
    JASTIP = 'JASTIP',
    RETAIL = 'BISNIS'
}

export interface LinkProps {
  link: any
}

export interface SetBanner {
  setBanner: any
}

export interface JastipCategory {
  id: number
  value: string
  image_country: string
}

export interface BisnisCategory {
  id: number
  value: string
  image_country: string
}

export interface FreelanceCategory {
  id: number
  value: string
  image_country: string
}

export interface JastipProduct {
  id: number
  image: string
  product_name: string
  slug_url: string
  date: string
  from_country: string
  image_from_country: string
  to_country: string
  image_to_country: string
  low_price: string
  high_price: string
  name_user: string
  image_user: string
  avg_rating: string
}

export interface BisnisProduct {
  id: number
  image: string
  product_name: string
  city_name: string
  slug_url: string
  low_price: string
  high_price: string
  name_user: string
  image_user: string
  avg_rating: string
}

export interface FreelanceProduct {
  id: number
  image: string
  product_name: string
  slug_url: string
  low_price: string
  high_price: string
  name_user: string
  image_user: string
  avg_rating: string
}
