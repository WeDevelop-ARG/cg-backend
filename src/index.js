import express from 'express'
import Sequelize from 'sequelize'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import * as models from '~/src/models'

import schema from './schema'

require('dotenv').config()

const port = process.env.PORT || 3001

const app = express()

const server = new ApolloServer({
  ...schema,
  instrospection: true,
  playground: true,
  tracing: true,
  context: async () => ({
    models,
    sequelize: new Sequelize(require('~/src/config/sequelize')()),
    currentUser: await models.user.findByPk('9c3859b0-5efe-11ea-bc55-0242ac130003')
  })
})

server.applyMiddleware({ app })

const httpServer = createServer(app)

server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(
    `Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`
  )
})
