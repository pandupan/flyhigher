import { BisnisCategory, FreelanceCategory, JastipCategory } from "@/types"

export interface IListHeader {
  children: JSX.Element | JSX.Element[] | string
  withHomepageFilter?: boolean
  rating?: "best" | "new" | string
  handleSetRating?: (e: any) => void
}

export interface IListCategories {
  listCategories: JastipCategory[] | FreelanceCategory[] | BisnisCategory[]
  setSelectedCateogry?: (
    category: JastipCategory | FreelanceCategory | BisnisCategory
  ) => void
}

export interface IListProducts {
  children: JSX.Element | JSX.Element[] | string
}

export interface IListSection {
  children: JSX.Element | JSX.Element[] | string
}
