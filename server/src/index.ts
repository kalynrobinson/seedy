import { PrismaClient } from "@prisma/client"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import * as express from "express"
import { createServer } from "http"
import * as cors from "cors"
// import fs from "fs"
// import path from "path"

import { schema as typeDefs } from "./schema"
import { resolvers } from "./resolvers"
import { GraphQL } from "./libraries/graphql-types/graphql"
import { getUserId } from "./utils"

interface AppContext {
  token?: string
  user?: GraphQL.User
}

const PORT = process.env.PORT ?? 3000

async function init() {
  const prisma = new PrismaClient({
    errorFormat: "minimal",
  })

  const app = express()
  const httpServer = createServer(app)

  const server = new ApolloServer<AppContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
  })

  await server.start()

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const userId = getUserId(req)
        return { token: req.headers.token, userId, prisma }
      },
    }),
  )

  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve))
  console.log(`🚀 Server ready at http://localhost:${PORT}/`)
}

init()
