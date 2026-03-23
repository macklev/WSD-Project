import { defineStore } from 'pinia'
import { ref } from 'vue'
import data from '../data/products.json'

export const useProductsStore = defineStore('products', () => {
  const products = ref(data.products)

  return {products}
})
