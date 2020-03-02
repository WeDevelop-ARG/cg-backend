import * as productController from '~/src/controllers/product'

const resolvers = {
  Query: {
    getProducts: productController.getProducts
  }
}

export default resolvers
