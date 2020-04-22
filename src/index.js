import express from 'express'
import Sequelize from 'sequelize'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import * as models from '~/src/models'
import jwtAuth from './middlewares/jwtAuth'
import bodyParser from 'body-parser'

import schema from './schema'

require('dotenv').config()

const port = process.env.PORT || 3001

const app = express()

app.use(jwtAuth)
app.use(bodyParser.json({ limit: '5mb' }))

const server = new ApolloServer({
  ...schema,
  instrospection: true,
  playground: true,
  tracing: true,
  context: async ({ req }) => ({
    models,
    sequelize: new Sequelize(require('~/src/config/sequelize')()),
    currentUser: req.user
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
