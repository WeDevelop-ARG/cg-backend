import * as productController from '~/src/controllers/product'

const resolvers = {
  Query: {
    getProducts: productController.getProducts,
    getProductById: (obj, { id }) => productController.getProductById(id)
  }
}

export default resolvers
