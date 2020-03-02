import { product } from '~/src/models'

export const getProducts = () => product.findAll()

export const getProductById = (id) => product.findByPk(id)
