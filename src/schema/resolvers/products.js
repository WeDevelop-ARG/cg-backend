import * as productController from '~/src/controllers/product'

const resolvers = {
  Query: {
    products: productController.getProducts,
    product: (obj, { id }) => productController.getProductById(id)
  }
}

export default resolvers
