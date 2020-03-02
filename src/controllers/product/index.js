import { product } from '~/src/models'

export const getProducts = () => product.findAll()
