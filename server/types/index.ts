export type { DataEnvelope } from "./dataEnvelopes"


export type ProductReview = {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  tags: string[]
  brand?: string
  reviews: ProductReview[]
  images: string[]
  thumbnail: string
}

export type UserGender = "male" | "female"

export type UserRole = "admin" | "moderator" | "user"

export type UserAddress = {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  country: string
}


export type User = {
  id: number
  firstName: string
  lastName: string
  gender: UserGender
  email: string
  phone: string
  birthDate: string
  image: string
  address: UserAddress
  role: UserRole
}