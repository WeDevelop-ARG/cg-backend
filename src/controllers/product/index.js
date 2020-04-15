import { product } from '~/src/models'

export const getProducts = () => product.findAll()

export const getProductById = (id) => product.findByPk(id)

export const getPhotos = (obj) => obj.getProductPhotos()

export const createProduct = (obj, { input }) => {
  return product.create(input)
}
