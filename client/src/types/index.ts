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

