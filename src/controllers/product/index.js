import InternalError from '~/src/errors/internal-error'
import { product } from '~/src/models'

export const getProducts = () => product.findAll()
  .catch(() => {
    throw new InternalError(InternalError.ERROR_MESAGGES.GENERIC)
  })
