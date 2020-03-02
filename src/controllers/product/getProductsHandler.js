import InternalError from '~/src/errors/internal-error'
import { product } from '~/src/models'

export default async () => {
  try {
    return await product.findAll()
  } catch (error) {
    throw new InternalError(InternalError.ERROR_MESAGGES.GENERIC)
  }
}
