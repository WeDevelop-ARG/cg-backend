import * as productController from '~/src/controllers/product'

const resolvers = {
  Query: {
    products: productController.products
  }
}

export default resolvers
