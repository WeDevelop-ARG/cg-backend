import * as productController from '~/src/controllers/product'

const resolvers = {
  Product: {
    photos: productController.getPhotos
  },
  Query: {
    products: productController.getProducts,
    product: (obj, { id }) => productController.getProductById(id)
  },
  Mutation: {
    createProduct: productController.createProduct
  }
}

export default resolvers
